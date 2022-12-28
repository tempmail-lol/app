import {LocalizationType} from "../LocalizationType";

const loc: LocalizationType = {
    first_load_screen: {
        welcome: "undefined",
        info: "undefined",
        question_purpose: "undefined",
        answer_purpose: "undefined",
        question_expire: "undefined",
        answer_expire: "undefined",
        question_secure: "undefined",
        answer_secure: "undefined",
        exit_button: "undefined",
    },
    address_screen: {
        //use %RECEIVED% and %ACTIVE% for processed emails and active inboxes, respectively.
        processed: "undefined",
        email_label: "undefined",
        copy_button: "undefined",
        copy_message: "undefined",
        copy_fail: "undefined",
        regenerate_button: "undefined",
        regenerate_prompt_message: "undefined",
        regenerate_prompt_no: "undefined",
        regenerate_prompt_yes: "undefined",
    },
    email_screen: {
        prompt: "undefined",
    },
    email_modal: {
        close_button: "undefined",
    },
    settings_screen: {
        licenses_button_label: "undefined",
        source_code_button_label: "undefined",
        privacy_policy_button_label: "undefined",
        javascript_switch_label: "undefined",
        javascript_enable_warning: "undefined",
        javascript_enable_warning_accept: "undefined",
        javascript_enable_warning_decline: "undefined",
        alternative_emails_switch_label: "undefined",
        alternative_emails_message: "undefined",
        alternative_emails_post_accept_message: "undefined",
        render_images_switch_label: "undefined",
        render_images_warning: "undefined",
        cancel: "undefined",
        enable: "undefined",
        version: "undefined", //use %VERSION% for version placeholder
        languages: "undefined",
        language_change_message: "undefined",
        credits_button_label: "undefined",
        remove_ads_label: "undefined",
        clear_data_warning: "undefined",
        clear_data: "undefined",
        biometric_login_switch_label: "undefined",
        biometric_enable_message: "undefined",
    },
    other: {
        addresses_tab: "undefined",
        emails_tab: "undefined",
        settings_tab: "undefined",
    }
};

export default loc;
