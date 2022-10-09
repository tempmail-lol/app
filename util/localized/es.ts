import {LocalizationType} from "../LocalizationType";

const loc: LocalizationType = {
    first_load_screen: {
        welcome: "¡Bienvenido a AnonyMail!",
        info: "Con esta aplicación, puede generar direcciones de correo electrónico anónimas.",
        question_purpose: "¿Cuál es el propósito de generar correos electrónicos temporales?",
        answer_purpose: "Para registrarse para los servicios sin usar su dirección de correo electrónico real.",
        question_expire: "¿Cuánto tiempo duran los correos electrónicos?",
        answer_expire: "Las direcciones de correo electrónico expiran después de una hora.",
        question_secure: "¿Es esto privado y seguro?",
        answer_secure: "Una vez que se envían los correos electrónicos a usted, se eliminan de nuestros servidores. Nadie puede tener una dirección de correo electrónico que ya esté registrada.",
        exit_button: "¡Pulsa para generar tu primer dirección de correo electrónico!",
    },
    address_screen: {
        //use %RECEIVED% and %ACTIVE% for processed emails and active inboxes, respectively.
        processed: "Hemos procesado %RECEIVED% correos electrónicos con %ACTIVE% casillas de correo activas.",
        email_label: "Tu Email Anónimo es:",
        copy_button: "Copiar",
        copy_message: "¡Copiado al portapapeles!",
        copy_fail: "Falló la copia, por favor inténtalo de nuevo.",
        regenerate_button: "Regenerar",
        regenerate_prompt_message: "¿Estás seguro? Tu antiguo correo electrónico será borrado, así como tu bandeja de entrada.",
        regenerate_prompt_no: "No",
        regenerate_prompt_yes: "Sí",
    },
    email_screen: {
        prompt: "Toca un correo electrónico para abrirlo.",
    },
    email_modal: {
        close_button: "Cerrar",
    },
    settings_screen: {
        licenses_button_label: "Licencias de código abierto",
        source_code_button_label: "Código fuente",
        privacy_policy_button_label: "Política de privacidad",
        javascript_switch_label: "Corre JavaScript",
        javascript_enable_warning: "Activar JavaScript puede hacer que los correos electrónicos que reciba de-anónimo." +
            "\n\nEsto puede hacer cosas como revelar su dirección IP al remitente del correo electrónico, hacerles saber que está utilizando un correo electrónico temporal, y más." +
            "\n\nSólo tiene que habilitar si sabe lo que está haciendo.",
        javascript_enable_warning_accept: "Lo sé lo que estoy haciendo",
        javascript_enable_warning_decline: "Cancelar",
        alternative_emails_switch_label: "Usa correos electrónicos alternativos",
        alternative_emails_message: "Los correos electrónicos alternativos le permiten eludir ciertas restricciones.\n" +
            "\n" +
            "Con esto, verá correos electrónicos con finalizaciones menos comunes (como .cfd en lugar de .com). Son más fáciles de crear, pero solo deberían usarse si los dominios .com normales no funcionan.",
        alternative_emails_post_accept_message: "¡Éxito! Haga clic en 'Regenerar' en la pantalla de direcciones para crear un nuevo correo electrónico.",
        render_images_switch_label: "Renderizar imágenes",
        render_images_warning: "Habilitar las imágenes hará que se muestren las imágenes en los correos electrónicos.\n\n" +
            "Esto podría revelar tu dirección IP una vez que se abra el correo electrónico.\nSólo usar si necesitas ver las imágenes en los correos electrónicos.",
        cancel: "Cancelar",
        enable: "Habilitar",
        version: "Estás usando AnonyMail versión %VERSION%", //use %VERSION% for version placeholder
        languages: "Idiomas",
        language_change_message: "Por favor, reinicia la aplicación para que el cambio de idioma surta efecto completamente. Nota: las traducciones al español se realizan usando OpenAI, por lo que pueden no ser completamente precisas.",
        credits_button_label: "Ver traductores",
    },
    other: {
        addresses_tab: "Correo",
        emails_tab: "Recibidos",
        settings_tab: "Ajustes",
    }
};

export default loc;
