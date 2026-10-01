import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ValidationErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === 400 && error.error?.errors) {
          const formattedErrors = this.formatErrors(error.error.errors);

          // Option 1: attach to error and rethrow
          return throwError(() => ({
            ...error,
            validationErrors: formattedErrors
          }));
        }

        return throwError(() => error);
      })
    );
  }

  private formatErrors(errors: any): Record<string, string[]> {
    const result: Record<string, string[]> = {};

    Object.keys(errors).forEach(key => {
      let cleanKey = key;

      // Remove JSON path prefix like "$."
      if (cleanKey.startsWith('$.')) {
        cleanKey = cleanKey.replace('$.', '');
      }

      result[cleanKey] = errors[key];
    });

    return result;
  }
}