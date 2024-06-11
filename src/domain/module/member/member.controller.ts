import { Controller, Get, Param } from "@nestjs/common";

@Controller('member')
export class MemberController{
    constructor(){}

    @Get('/:userid')
    async getUserInfo(
        @Param('userid') userId : string
    ) {
        return null;
    }

}