/**
 * Sri Annapoorneshwari Catering
 * Language Switcher: Kannada (Default) & English
 * Stores choice in localStorage with data-kn and data-en attributes
 */

(function () {
    "use strict";

    const STORAGE_KEY = "annapoorneshwari_lang";
    let currentLang = localStorage.getItem(STORAGE_KEY) || "kn";

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.setAttribute("lang", lang);

        // Update all elements with data-kn and data-en attributes
        const translatableElements = document.querySelectorAll("[data-kn]");
        translatableElements.forEach(function (el) {
            const knText = el.getAttribute("data-kn");
            const enText = el.getAttribute("data-en");
            if (lang === "en" && enText) {
                el.innerHTML = enText;
            } else if (knText) {
                el.innerHTML = knText;
            }
        });

        // Update placeholder attributes if present
        const inputElements = document.querySelectorAll("[data-kn-placeholder]");
        inputElements.forEach(function (input) {
            const knPlaceholder = input.getAttribute("data-kn-placeholder");
            const enPlaceholder = input.getAttribute("data-en-placeholder");
            if (lang === "en" && enPlaceholder) {
                input.setAttribute("placeholder", enPlaceholder);
            } else if (knPlaceholder) {
                input.setAttribute("placeholder", knPlaceholder);
            }
        });

        // Update toggle buttons
        const toggleButtons = document.querySelectorAll(".lang-switch-btn");
        toggleButtons.forEach(function (btn) {
            if (lang === "kn") {
                btn.innerHTML = '🌐 English';
                btn.setAttribute("title", "Switch to English");
                btn.setAttribute("aria-label", "Switch to English");
            } else {
                btn.innerHTML = '🌐 ಕನ್ನಡ';
                btn.setAttribute("title", "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ");
                btn.setAttribute("aria-label", "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ");
            }
        });

        // Toggle active class on language pills if any
        document.querySelectorAll("[data-lang-btn]").forEach(function(btn) {
            if (btn.getAttribute("data-lang-btn") === lang) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    // Toggle between 'kn' and 'en'
    window.toggleLanguage = function () {
        const newLang = currentLang === "kn" ? "en" : "kn";
        setLanguage(newLang);
    };

    // Explicit switch
    window.switchLanguage = function (lang) {
        if (lang === "kn" || lang === "en") {
            setLanguage(lang);
        }
    };

    // Initialize on DOMContentLoaded
    document.addEventListener("DOMContentLoaded", function () {
        setLanguage(currentLang);

        // Attach event listeners to any buttons
        document.querySelectorAll(".lang-switch-btn").forEach(function (btn) {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                window.toggleLanguage();
            });
        });
    });
})();
