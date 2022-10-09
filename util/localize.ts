import {LocalizationType} from "./LocalizationType";
import {LangType} from "./LangType";

import en from "./localized/en";
import xd from "./localized/xd";
import fr from "./localized/fr";
import xe from "./localized/xe";
import xa from "./localized/xa";
import es from "./localized/es";


export default function(lang: LangType): LocalizationType {
    switch(lang) {
        case "en":
            return en;
        case "xd":
            return xd;
        case "fr":
            return fr;
        case "xe":
            return xe;
        case "xa":
            return xa;
        case "es":
            return es;
        default:
            return en;
    }
}
