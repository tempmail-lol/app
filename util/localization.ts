
type Localization = {
    first_load_screen: {
        welcome: string;
        info: string;
        question_purpose: string;
        answer_purpose: string;
        question_expire: string;
        answer_expire: string;
        question_secure: string;
        answer_secure: string;
        exit_button: string;
    },
    email_modal: {
        close_button: string
    },
    address_screen: {
        processed: string,
        email_label: string,
        copy_button: string,
        regenerate_button: string,
        copy_message: string,
        regenerate_prompt_message: string,
        regenerate_prompt_no: string,
        regenerate_prompt_yes: string,
    },
    email_screen: {
        prompt: string,
    },
    settings_screen: {
        licenses_button_label: string,
        source_code_button_label: string,
        privacy_policy_button_label: string,
        javascript_switch_label: string,
        alternative_emails_switch_label: string,
        render_images_switch_label: string,
        javascript_enable_warning: string,
        javascript_enable_warning_accept: string,
        javascript_enable_warning_decline: string,
        alternative_emails_message: string,
        alternative_emails_post_accept_message: string,
        render_images_warning: string,
        enable: string,
        cancel: string,
        version: string,
    },
};

// const english: Localization = {
//     first_load_screen: {
//         welcome: ""
//     }
// }

/**
 * @returns Localization
 */
export default function(lang: "en" | "xd"): Localization {
    return JSON.parse("{}");
}
