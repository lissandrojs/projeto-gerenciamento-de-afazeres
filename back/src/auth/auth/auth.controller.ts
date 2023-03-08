import { Body, Controller,Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {

    constructor(private authService : AuthService){}

    @Post('login')
    login(@Body()body:any) {
        this.authService.login(body.email,body.password)
    }
}
