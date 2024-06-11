import { Module } from "@nestjs/common";
import { MemberController } from "./member.controller";

@Module({
    imports: [],
    providers: [],
    controllers: [MemberController]

})
export class MemberModule{}