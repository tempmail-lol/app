import {LocalizationType} from "../LocalizationType";

//since xd is an unused country code, i'm using it for pirate speak

const loc: LocalizationType = {
    first_load_screen: {
        welcome: "Welcome aboard, matey!",
        info: "Arr, with this app ye can generate anon emails!",
        question_purpose: "argh, what's the purpose of this app?",
        answer_purpose: "Ye can use this app to generate anon emails, without using yer real email address.",
        question_expire: "argh, how long do anon emails last for?",
        answer_expire: "Anon emails walk the plank after one hour.",
        question_secure: "argh, is this private and secure?",
        answer_secure: "Once ye send anon emails to yerself, they are deleted from our servers.  No-one can have anon emails that have already been registered.",
        exit_button: "Tap to generate ye first anon email!",
    },
    address_screen: {
        //use %RECEIVED% and %ACTIVE% for processed emails and active inboxes, respectively.
        processed: "Our crew has processed %RECEIVED% emails with %ACTIVE% active inboxes.",
        email_label: "Ye anon email is:",
        copy_button: "Scribe",
        copy_message: "Carved to ye clipboard!",
        copy_fail: "Failed to scribe, try again matey.",
        regenerate_button: "Venture",
        regenerate_prompt_message: "Arr, are ye sure?  Ye old email will be deleted.",
        regenerate_prompt_no: "Nay",
        regenerate_prompt_yes: "Aye",
    },
    email_screen: {
        prompt: "Select yer email.",
    },
    email_modal: {
        close_button: "Depart",
    },
    settings_screen: {
        licenses_button_label: "Open Source Licenses",
        source_code_button_label: "Witchcraft",
        privacy_policy_button_label: "Privacy Policy",
        javascript_switch_label: "Run JavaScript",
        javascript_enable_warning: "Arr, enabling JavaScript can cause spies on the ship to reveal yer IP address.\n\n" +
            "This can do things such as: reveal yer IP address to the email sender, let them know yer using a temporary email, and more.\n\n" +
            "Only enable if you know what ye are doing.",
        javascript_enable_warning_accept: "Walk Davy Jones' locker",
        javascript_enable_warning_decline: "Nay",
        alternative_emails_switch_label: "Use alternative emails",
        alternative_emails_message: "Nay on commercial emails, ye be using alternative emails.\n\n" +
            "Emails be made for bypassing temporary email spies.  Spies don't detect .cfd emails, so they don't know yer using a temporary email.\n\n" +
            "Only enable if .com emails are not working.  If too many mates use alternative emails, they are likely to be blocked faster.",
        alternative_emails_post_accept_message: "Ye be using alternative emails.  Open ye email tab and select ye venture button to generate alternative emails.",
        render_images_switch_label: "Render images",
        render_images_warning: "Ye be rendering images.  Spies can detect when ye courier pigeon gets ye pictures and can find ye IP address.\n\n" +
            "Only enable if ye need images.",
        cancel: "Depart",
        enable: "Venture",
        version: "Ye be usin AnonyMail %VERSION%", //use %VERSION% for version placeholder
        languages: "Languages:",
        language_change_message: "Ye be changing languages.  Ye app needs restartin' matey.",
        credits_button_label: "View ye Rosetta Stone creators",
        remove_ads_label: "Remove Ads",
        clear_data: "Clear Data",
        clear_data_warning: "Arr, are ye sure?  Ye will lose all yer data.",
        biometric_login_switch_label: "Scan ye biometric data",
        biometric_enable_message: "Enable ye biometric data?  Ye need it fer opening ye app.",
    },
    other: {
        addresses_tab: "On Deck",
        emails_tab: "Pigeon Letters",
        settings_tab: "Engine Room"
    }
};

export default loc;
