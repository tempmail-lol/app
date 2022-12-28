import {LocalizationType} from '../LocalizationType';

function randomLetters(length: number = randomLength()): string {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return result;
}

function randomLength(): number {
    //6 to 24
    return Math.floor(Math.random() * 18) + 6;
}

const loc: LocalizationType = {
    first_load_screen: {
        welcome: randomLetters(),
        info: randomLetters(),
        question_purpose: randomLetters(),
        answer_purpose: randomLetters(),
        question_expire: randomLetters(),
        answer_expire: randomLetters(),
        question_secure: randomLetters(),
        answer_secure: randomLetters(),
        exit_button: randomLetters(),
    },
    address_screen: {
        //use %RECEIVED% and %ACTIVE% for processed emails and active inboxes, respectively.
        processed: randomLetters(),
        email_label: randomLetters(),
        copy_button: randomLetters(),
        copy_message: randomLetters(),
        copy_fail: randomLetters(),
        regenerate_button: randomLetters(),
        regenerate_prompt_message: randomLetters(),
        regenerate_prompt_no: randomLetters(),
        regenerate_prompt_yes: randomLetters(),
    },
    email_screen: {
        prompt: randomLetters(),
    },
    email_modal: {
        close_button: randomLetters(),
    },
    settings_screen: {
        licenses_button_label: randomLetters(),
        source_code_button_label: randomLetters(),
        privacy_policy_button_label: randomLetters(),
        javascript_switch_label: randomLetters(),
        javascript_enable_warning: randomLetters(),
        javascript_enable_warning_accept: randomLetters(),
        javascript_enable_warning_decline: randomLetters(),
        alternative_emails_switch_label: randomLetters(),
        alternative_emails_message: randomLetters(),
        alternative_emails_post_accept_message: randomLetters(),
        render_images_switch_label: randomLetters(),
        render_images_warning: randomLetters(),
        cancel: randomLetters(),
        enable: randomLetters(),
        version: randomLetters(), //use %VERSION% for version placeholder
        languages: randomLetters(),
        language_change_message: randomLetters(),
        credits_button_label: randomLetters(),
        remove_ads_label: "Remove Ads",
        clear_data: randomLetters(),
        clear_data_warning: randomLetters(),
        biometric_login_switch_label: randomLetters(),
    },
    other: {
        addresses_tab: randomLetters(),
        emails_tab: randomLetters(),
        settings_tab: randomLetters(),
    }
};

export default loc;
