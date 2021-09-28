import React, { useState, useEffect } from "react";
import axios from "axios";
const Convert = ({ language, text }) => {
  const [translatedText, setTraslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => clearTimeout(timer);
  }, [text]);
  useEffect(() => {
    const handleTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTraslatedText(data.data.translations[0].translatedText);
    };

    handleTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translatedText}</h1>
    </div>
  );
};
export default Convert;
