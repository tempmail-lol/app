import {Email} from "tempmail.lol";
import {LangType} from "./LangType";

//NotAHack:tm:
//can't use "Storage", js devs take all the good names and reserve them.
export default class CoolStorage {
    
    public static token: string;
    public static address: string;
    public static language: LangType;
    public static easter_egg_time: boolean = false;
    
    public static emails: Email[] = [];
    
}
