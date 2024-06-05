import { CallHandler,ExecutionContext,Logger,NestInterceptor } from "@nestjs/common"; 
import { Observable } from "rxjs";


export class HttpLoggerInterCeptor implements NestInterceptor {
    private logger = new Logger("HTTP-CALL")

    intercept(
        context: ExecutionContext, 
        next: CallHandler<any>): 
        Observable<any> | Promise<Observable<any>> {
            const req = context.switchToHttp().getRequest();
            const res = context.switchToHttp().getResponse();
        return next.handle().pipe(
            tap(() => {
                this.logger.log(
                    createHtt
                )
            })
        )

    }

}