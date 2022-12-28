import {LocalizationType} from "../LocalizationType";
import {Platform} from "react-native";

const loc: LocalizationType = {
    first_load_screen: {
        welcome: "AnonyMail'e Hoşgeldiniz!",
        info: "Bu uygulama ile anonim e-posta adresleri oluşturabilirsiniz!",
        question_purpose: "Geçici e-posta oluşturmanın amacı nedir?",
        answer_purpose: "Gerçek e-posta adresinizi kullanmaksızın hizmetlere kaydolmak için.",
        question_expire: "E-posta adresleri ne kadar süreyle aktif kalır?",
        answer_expire: "E-posta adresleri bir saat sonra sona erer.",
        question_secure: "Bu gizli ve güvenli mi?",
        answer_secure: "E-postalar size gönderildikten sonra sunucularımızdan silinir. Başka herhangi biri daha önce kayıt edilmiş bir e-posta adresi alamaz.",
        exit_button: "İlk e-posta adresinizi oluşturmak için dokunun!",
    },
    address_screen: {
        processed: "%RECEIVED% e-postayı %ACTIVE% aktif gelen kutusu ile işledik.",
        email_label: "Anonim E-Postanız:",
        copy_button: "Kopyala",
        copy_message: "Panoya kopyalandı!",
        copy_fail: "Kopyalama başarısız, lütfen tekrar deneyin.",
        regenerate_button: "Yeniden oluştur",
        regenerate_prompt_message: "Emin misin? Eski e-postan silinecek.",
        regenerate_prompt_no: "Hayır",
        regenerate_prompt_yes: "Evet",
    },
    email_screen: {
        prompt: "Bir e-postaya dokunarak açın.",
    },
    email_modal: {
        close_button: "Kapat",
    },
    settings_screen: {
        licenses_button_label: "Açık Kaynak Lisansları",
        source_code_button_label: "Kaynak Kodu",
        privacy_policy_button_label: "Gizlilik Politikası",
        javascript_switch_label: "JavaScript Çalıştır",
        javascript_enable_warning: "JavaScript'in etkinleştirilmesi, size gönderilen e-postalarda sizi anonimliğinizi ortadan kaldırabilir." +
            "\n\nBu şunları yapabilir: E-posta gönderene IP adresinizi ortaya çıkarmak, onlara geçici bir e-posta kullandığınızı bildirmek ve daha fazlası." +
            "\n\nYalnızca ne yaptığınızı bilirseniz etkinleştirin.",
        javascript_enable_warning_accept: "Ne yaptığımı biliyorum",
        javascript_enable_warning_decline: "İptal",
        alternative_emails_switch_label: "Alternatif e-postalar kullan",
        alternative_emails_message: "Alternatif e-postalar bazı kısıtlamaları aşmanıza izin verir.\n\n" +
            "Bu, daha nadir biten e-postalar (örneğin .cfd yerine .com) ile karşılaşacaksınız. Daha kolay oluşturulurlar, ancak normal .com alan adları çalışmıyorsa kullanılmalıdır.",
        alternative_emails_post_accept_message: "Başarılı! Adres ekranındaki 'Yeniden Oluştur'a tıklayarak yeni bir e-posta oluşturun.",
        render_images_switch_label: "Görüntüleri oluştur",
        render_images_warning: "Görüntüler etkinleştirildiğinde, e-postalarda görüntüler oluşturulur.\n\n" +
            "Bu, bir e-posta açıldığında potansiyel olarak IP adresinizi ortaya çıkarabilir.\nE-postalardaki görüntüleri görüntülemek için yalnızca kullanın.",
        cancel: "İptal",
        enable: "Etkinleştir",
        version: "AnonyMail sürümünüz %VERSION%",
        languages: "Diller:",
        language_change_message: "Lütfen, değişikliğin tam olarak etkili olması için uygulamayı yeniden başlatın. Not: Türkçe çeviriler OpenAI kullanılarak yapılmaktadır, bu nedenle tam olarak doğru olmayabilir.",
        credits_button_label: "Çevirmenleri görüntüle",
        remove_ads_label: "Reklamları Kaldır",
        clear_data: "Veriyi Temizle",
        clear_data_warning: "AnonyMail için tüm verilerinizi temizlemek istediğinize emin misiniz?\n\n" + 
            "Bu, cihazınızda depolanan tüm e-postaları geri dönüşü olmayan bir şekilde siler ve uygulama varsayılan durumuna sıfırlanır.",
        biometric_login_switch_label: Platform.OS === "ios" ? "FaceID veya TouchID" : "Biyometrik Giriş",
        biometric_enable_message: Platform.OS === "ios"
            ? "Face ID veya Touch ID'yi etkinleştir? AnonyMail'i her açtığınızda bu kullanmanız gerekecek."
            : "Biometrik girişi etkinleştirilsin mi? Her AnonyMail'i açtığınızda bunu kullanmanız gerekecek."
    },
    other: {
        addresses_tab: "Adres",
        emails_tab: "E-postalar",
        settings_tab: "Ayarlar",
    }
};

export default loc;
