import {LocalizationType} from "../LocalizationType";
import {Platform} from "react-native";

//i would do export {} as Localization, but my ide doesn't do type checking for that
const loc: LocalizationType = {
    first_load_screen: {
        welcome: "Bienvenue sur AnonyMail!",
        info: "En utilisant cette application, vous pourrez générer des adresses e-mail privées!",
        question_purpose: "Quel est le but de générer des adresses e-mail temporaire?",
        answer_purpose: "Le but est de s'inscrire sur des services et sites web sans utiliser votre adresse e-mail principale.",
        question_expire: "Combien de temps durent les addresses e-mail?",
        answer_expire: "Les adresses e-mail expirent après une heure.",
        question_secure: "Est-cette application privé et sécurisé?",
        answer_secure: "Lorsque vous recevez un e-mail, il est supprimé de nos serveurs. Personne ne peut avoir accès a une adresse déja enregistrée.",
        exit_button: "Tapez pour générer votre première adresse e-mail!",
    },
    address_screen: {
        processed: "Nous avons traité %RECEIVED% e-mails avec %ACTIVE% boîtes de réceptions actives.",
        email_label: "Votre adresse e-mail AnonyMail est:",
        copy_button: "Copier",
        copy_message: "Copié dans le presse-papier!",
        copy_fail: "Échec de copie, réessayez s'il vous plaît.",
        regenerate_button: "Générer une nouvelle adresse",
        regenerate_prompt_message: "Souhaitez-vous supprimer votre adresse e-mail? Votre ancienne adresse e-mail sera supprimée.",
        regenerate_prompt_no: "Non",
        regenerate_prompt_yes: "Oui",
    },
    email_screen: {
        prompt: "Tapez sur un e-mail pour l'ouvrir.",
    },
    email_modal: {
        close_button: "Fermer",
    },
    settings_screen: {
        licenses_button_label: "Les Licenses Open Source",
        source_code_button_label: "Le Code Source",
        privacy_policy_button_label: "Politique de Confidentialité",
        javascript_switch_label: "Exécuter JavaScript",
        javascript_enable_warning: "L'éxécution de JavaScript peut causer la perte de votre anonymat via les e-mails que vous reçevrez." +
            "\n\nCela peut avoir pour conséquence de réveler votre adresse IP à l'émétteur du mail, les informer que vous utiliser une adresse e-mail jetable, et d'autres." +
            "\n\nN'activez JavaScript seulement si vous savez ce que vous faites.",
        javascript_enable_warning_accept: "Je sais ce que je fais",
        javascript_enable_warning_decline: "Annuler",
        alternative_emails_switch_label: "Utiliser une adresse alternative",
        alternative_emails_message: "Les adresses alternatives peuvent vous permettre contourner certaines restrictions.\n\n" +
            "En choisissant cette option, vous verrez des e-mails (avec des terminiaisons inhabituelles .cfd à la place de .com)." +
            " Elles sont plus faciles à créer, mais vous ne devriez les utiliser que si les adresse normales en .com ne fonctionnent pas.",
        alternative_emails_post_accept_message: "Succès!  Cliquez sur « Générer une nouvelle adresse » sur l'onglet des addresses pour créer une nouvelle adresse e-mail.",
        render_images_switch_label: "Afficher des images",
        render_images_warning: "L'activation des images les afficheront dans les e-mails reçus.\n\n" +
            "Cela peut potentiellement réveler votre adresse IP lors de l'ouverture d'un e-mail.\nN'utilisez que si vous avez besoin de voir les images présentes dans l'e-mail.",
        cancel: "Annuler",
        enable: "Autoriser",
        version: "Vous utilisez AnonyMail version %VERSION%",
        languages: "Langues:",
        language_change_message: "Redémarrez votre application pour les changements",
        credits_button_label: "Voir les traducteurs",
        remove_ads_label: "Supprimez la pub",
        clear_data: "Supprimer les données",
        clear_data_warning: `Êtes-vous sûr de vouloir effacer toutes vos données pour AnonyMail?\n\nCela supprimera de manière irréversible tous les emails stockés sur votre appareil et l'application sera réinitialisée à son état par défaut.`,
        biometric_login_switch_label: Platform.OS === "ios" ? "Face ID ou Touch ID" : "Connexion biométrique",
    },
    other: {
        addresses_tab: "Adresses",
        emails_tab: "E-mails",
        settings_tab: "Réglages",
    }
};

export default loc;
