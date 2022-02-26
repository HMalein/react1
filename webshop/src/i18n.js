import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Cart-button": "cart",
      "Admin-button": "To admin view",
      "add-to-cart-button" : "Add to cart"
    }
  },
  ee: {
    translation: {
      "Cart-button": "Ostukorvi",
      "Admin-button": "Administraatori vaatesse",
      "add-to-cart-button" : "Lisa ostukorvi"
    }
  },
  ru: {
    translation: {
      "Cart-button": "RU ostukorvi",
      "Admin-button": "RU To admin view",
      "add-to-cart-button" : "RU Add to cart"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language"), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: "ee",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;