import {Email} from "tempmail.lol";

//NotAHack:tm:
//can't use "Storage", js devs take all the good names and reserve them.
export default class CoolStorage {
    
    private constructor() {
    }
    
    public static token: string;
    public static address: string;
    
    public static emails: Email[] = [];
    
}
