import {LocalizationType} from "../LocalizationType";

//i would do export {} as Localization, but my ide doesn't do type checking for that
const loc: LocalizationType = {
    first_load_screen: {
        welcome: "Welcome to AnonyMail!",
        info: "Using this app, you can generate anonymous email addresses!",
        question_purpose: "What is the purpose of generating temporary emails?",
        answer_purpose: "To signup for services without using your real email address.",
        question_expire: "How long do email addresses last for?",
        answer_expire: "Email addresses expire after one hour.",
        question_secure: "Is this private and secure?",
        answer_secure: "Once emails are sent to you, they are deleted from our servers.  No-one can have an email address that has already been registered.",
        exit_button: "Tap to generate your first email address!",
    },
    address_screen: {
        processed: "We've processed %RECEIVED% emails with %ACTIVE% active inboxes.",
        email_label: "Your Anonymous Email is:",
        copy_button: "Copy",
        copy_message: "Copied to clipboard!",
        copy_fail: "Failed to copy, please try again.",
        regenerate_button: "Regenerate",
        regenerate_prompt_message: "Are you sure?  Your old email will be deleted as well as your inbox.",
        regenerate_prompt_no: "No",
        regenerate_prompt_yes: "Yes",
    },
    email_screen: {
        prompt: "Tap on an email to open it.",
    },
    email_modal: {
        close_button: "Close",
    },
    settings_screen: {
        licenses_button_label: "Open Source Licenses",
        source_code_button_label: "Source Code",
        privacy_policy_button_label: "Privacy Policy",
        javascript_switch_label: "Run JavaScript",
        javascript_enable_warning: "Enabling JavaScript can cause emails you receive to de-anonymize you." +
            "\n\nThis can do things such as: reveal your IP address to the email sender, let them know you are using a temporary email, and more." +
            "\n\nOnly enable if you know what you are doing.",
        javascript_enable_warning_accept: "I know what I am doing",
        javascript_enable_warning_decline: "Cancel",
        alternative_emails_switch_label: "Use alternative emails",
        alternative_emails_message: "Alternative emails allow you to bypass certain restrictions.\n\n" +
            "With this, you will see emails with less common endings (such as .cfd instead of .com).  They are easier to" +
            " create, but should only be used if the normal .com domains are not working.",
        alternative_emails_post_accept_message: "Success!  Click 'Regenerate' on the Address screen to make a new email.",
        render_images_switch_label: "Render images",
        render_images_warning: "Enabling images will render images in emails.\n\n" +
            "This could potentially reveal your IP address once an email is opened.\nOnly use if you need to view images in emails.",
        cancel: "Cancel",
        enable: "Enable",
        version: "You are using AnonyMail version %VERSION%",
        languages: "Languages:",
        language_change_message: "Please restart the app for the language change to fully take effect.",
    },
    other: {
        addresses_tab: "Address",
        emails_tab: "Emails",
        settings_tab: "Settings",
    }
};

export default loc;
