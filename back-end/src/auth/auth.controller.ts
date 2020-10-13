import { LoginUserDto } from './../users/user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {   }

    @Post()
    async login(@Body() loginUserDto: LoginUserDto) {
        return await this.authService.validateUserByPassword(loginUserDto);
    }
}
