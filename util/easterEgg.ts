import {Linking} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function(times: number): boolean {
    switch(times) {
        case 10: alert("You do know you don't have to click copy so many times, right?"); AsyncStorage.setItem("@easter_egg", "true"); break;
        case 20: alert("Didn't you read the last message?  THE. EMAIL. IS. ON. YOUR. CLIPBOARD."); break;
        case 30: alert("Doesn't your finger hurt from tapping so many times?"); break;
        case 40: alert("Please stop."); break;
        case 50: alert("Halfway to 100!  Tired yet?"); break;
        case 60: alert("That's 60 times now..."); break;
        case 70: alert("Nothing better to do with your time?"); break;
        case 80: alert("How about a break?  Go do something fun."); break;
        case 90: alert("Are you serious?"); break;
        case 100: alert("That's it.  You've reached 100.  I'm not sure what to say."); break;
        case 110: alert("Get to 200 and something cool will happen"); break;
        case 120: alert("Originally, this app was going to be named TempMail but that was taken"); break;
        case 130: alert("Don't you think your clipboard has had enough?"); break;
        case 140: alert("Leave your poor clipboard alone, it has done 140 copies so far :("); break;
        case 150: alert("Uncopied to clipboard"); break;
        case 160: alert("We're almost at the cool thing"); break;
        case 170: alert("only 30 left!"); break;
        case 180: alert("It's really cool"); break;
        case 190: alert("Ready?"); break;
        case 200: alert("Got you!  But something cool WILL happen at 300... or will it?"); break;
        case 210: alert("What if I'm lying again?"); break;
        case 220: alert("Or am I?  *evil laugh*"); break;
        case 230: alert("alert(\"\"); break;"); break;
        case 240: alert("I think you got a new email."); break;
        case 250: alert("You ok?"); break;
        case 260: alert("40 more"); break;
        case 270: alert("50 more"); break;
        case 280: alert("wait no i mean 30 more not 50"); break;
        case 290: alert("Ready?"); break;
        case 295: alert("5"); break;
        case 296: alert("4"); break;
        case 297: alert("3"); break;
        case 298: alert("2"); break;
        case 299: alert("1"); break;
        case 310: alert("Have you not learned your lesson?"); break;
        case 400: alert("400..."); break;
        case 500: alert("We're at 500... are you sure you don't have anything better to do?"); break;
        case 600: alert("600 and counting....."); break;
        case 700: alert("700"); break;
        case 800: alert("Why are you doing this"); break;
        case 900: alert("Don't tell me... 900?"); break;
        case 998: alert("Congrats, you're at 998; however, if you click copy again the app will crash."); break;
        case 999: throw new Error();
        case 1000: alert("Well looks like it didn't.  I'm not testing to see if it crashes or not.  I'll assume that it won't."); break;
        default: return false;
    }
    
    return true;
    
}
