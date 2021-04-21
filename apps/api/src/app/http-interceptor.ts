import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    req.headers['API_KEY'] = environment.API_KEY;
    return next
      .handle()
      .pipe();
  }
}

//Add Logging and Error handling for production