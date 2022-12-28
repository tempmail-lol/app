import {LocalizationType} from "../LocalizationType";

const loc: LocalizationType = {
    first_load_screen: {
        welcome: "",
        info: "",
        question_purpose: "",
        answer_purpose: "",
        question_expire: "",
        answer_expire: "",
        question_secure: "",
        answer_secure: "",
        exit_button: "",
    },
    address_screen: {
        //use %RECEIVED% and %ACTIVE% for processed emails and active inboxes, respectively.
        processed: "",
        email_label: "",
        copy_button: "",
        copy_message: "",
        copy_fail: "",
        regenerate_button: "",
        regenerate_prompt_message: "",
        regenerate_prompt_no: "",
        regenerate_prompt_yes: "",
    },
    email_screen: {
        prompt: "",
    },
    email_modal: {
        close_button: "",
    },
    settings_screen: {
        licenses_button_label: "",
        source_code_button_label: "",
        privacy_policy_button_label: "",
        javascript_switch_label: "",
        javascript_enable_warning: "",
        javascript_enable_warning_accept: "",
        javascript_enable_warning_decline: "",
        alternative_emails_switch_label: "",
        alternative_emails_message: "",
        alternative_emails_post_accept_message: "",
        render_images_switch_label: "",
        render_images_warning: "",
        cancel: "",
        enable: "",
        version: "", //use %VERSION% for version placeholder
        languages: "",
        language_change_message: "",
        credits_button_label: "",
        remove_ads_label: "",
        clear_data: "",
        clear_data_warning: "",
    },
    other: {
        addresses_tab: "",
        emails_tab: "",
        settings_tab: "",
    }
};

export default loc;
