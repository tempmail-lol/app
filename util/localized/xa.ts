import {LocalizationType} from "../LocalizationType";

//i would do export {} as Localization, but my ide doesn't do type checking for that
const loc: LocalizationType = {
    first_load_screen: {
        welcome: "Welcome to AnonyMail!".toUpperCase(),
        info: "Using this app, you can generate anonymous email addresses!".toUpperCase(),
        question_purpose: "What is the purpose of generating temporary emails?".toUpperCase(),
        answer_purpose: "To signup for services without using your real email address.".toUpperCase(),
        question_expire: "How long to email addresses last for?".toUpperCase(),
        answer_expire: "Email addresses expire after one hour.".toUpperCase(),
        question_secure: "Is this private and secure?".toUpperCase(),
        answer_secure: "Once emails are sent to you, they are deleted from our servers.  No-one can have an email address that has already been registered.".toUpperCase(),
        exit_button: "Tap to generate your first email address!".toUpperCase(),
    },
    address_screen: {
        processed: "We've processed %RECEIVED% emails with %ACTIVE% active inboxes.".toUpperCase(),
        email_label: "Your Anonymous Email is:".toUpperCase(),
        copy_button: "Copy".toUpperCase(),
        copy_message: "Copied to clipboard!".toUpperCase(),
        copy_fail: "Failed to copy, please try again.".toUpperCase(),
        regenerate_button: "Regenerate".toUpperCase(),
        regenerate_prompt_message: "Are you sure?  Your old email will be deleted as well as your inbox.".toUpperCase(),
        regenerate_prompt_no: "No".toUpperCase(),
        regenerate_prompt_yes: "Yes".toUpperCase(),
    },
    email_screen: {
        prompt: "Tap on an email to open it.".toUpperCase(),
    },
    email_modal: {
        close_button: "Close".toUpperCase(),
    },
    settings_screen: {
        licenses_button_label: "Open Source Licenses".toUpperCase(),
        source_code_button_label: "Source Code".toUpperCase(),
        privacy_policy_button_label: "Privacy Policy".toUpperCase(),
        javascript_switch_label: "Run JavaScript".toUpperCase(),
        javascript_enable_warning: "Enabling JavaScript can cause emails you receive to de-anonymize you.".toUpperCase() +
            "\n\nThis can do things such as: reveal your IP address to the email sender, let them know you are using a temporary email, and more.".toUpperCase() +
            "\n\nOnly enable if you know what you are doing.".toUpperCase(),
        javascript_enable_warning_accept: "I know what I am doing".toUpperCase(),
        javascript_enable_warning_decline: "Cancel".toUpperCase(),
        alternative_emails_switch_label: "Use alternative emails".toUpperCase(),
        alternative_emails_message: "Alternative emails allow you to bypass certain restrictions.\n\n".toUpperCase() +
            "With this, you will see emails with less common endings (such as .cfd instead of .com).  They are easier to".toUpperCase() +
            " create, but should only be used if the normal .com domains are not working.".toUpperCase(),
        alternative_emails_post_accept_message: "Success!  Click 'Regenerate' on the Address screen to make a new email.".toUpperCase(),
        render_images_switch_label: "Render images".toUpperCase(),
        render_images_warning: "Enabling images will render images in emails.\n\n".toUpperCase() +
            "This could potentially reveal your IP address once an email is opened.\nOnly use if you need to view images in emails.".toUpperCase(),
        cancel: "Cancel".toUpperCase(),
        enable: "Enable".toUpperCase(),
        version: "You are using AnonyMail version %VERSION%".toUpperCase(),
        languages: "Languages:".toUpperCase(),
        language_change_message: "You will need to restart the app to change languages.".toUpperCase(),
        credits_button_label: "VIEW TRANSLATORS"
    },
    other: {
        addresses_tab: "ADDRESS",
        emails_tab: "EMAILS",
        settings_tab: "SETTINGS",
    }
};

export default loc;
