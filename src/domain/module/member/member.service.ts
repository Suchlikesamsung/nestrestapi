import { Injectable } from "@nestjs/common";
import { promises } from "dns";

@Injectable()
export class MemberService {
    constructor(){}

    async getMemberInfoByUserId(userid : string):Promise<>{
            }

}