import React, { useEffect } from "react";

const RecaptchaForm = ({ siteKey }) => {
  useEffect(() => {
    const renderRecaptcha = () => {
      if (window.grecaptcha) {
        const forms = document.getElementsByTagName("form");
        for (let i = 0; i < forms.length; i++) {
          const form = forms[i];
          const recaptchaContainer = document.createElement("div");
          form.appendChild(recaptchaContainer);

          window.grecaptcha.render(recaptchaContainer, {
            sitekey: siteKey,
            theme: "dark",
            // additional parameters if needed
          });
        }
      }
    };

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.addEventListener("load", renderRecaptcha);

    return () => {
      script.removeEventListener("load", renderRecaptcha);
      document.head.removeChild(script);
    };
  }, [siteKey]);

  return null;
};

export default RecaptchaForm;
