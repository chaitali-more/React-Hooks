// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  // Default language
  lng: "en", 

  // Fallback agar translation missing ho jaye
  fallbackLng: "en",

  // Debugging enable karne ke liye (dev mode)
  debug: true, 

  interpolation: {
    escapeValue: false, // React already escapes by default
  },

  // Actual translations
  resources: {
    en: {
      translation: {
        welcome: "Welcome to our app!",
        login: "Login",
        logout: "Logout"
      }
    },
    hi: {
      translation: {
        welcome: "हमारे ऐप में आपका स्वागत है!",
        login: "लॉगिन",
        logout: "लॉगआउट"
      }
    }
  }
});

export default i18n;
