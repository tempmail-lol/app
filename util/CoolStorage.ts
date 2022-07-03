import {Email} from "tempmail.lol";

//NotAHack:tm:
//can't use "Storage".  javascript moment
export default class CoolStorage {
    
    private constructor() {}
    
    public static token: string;
    public static address: string;
    
    public static emails: Email[] = [];
    
}
