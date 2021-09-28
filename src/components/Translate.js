// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { languageOptions } from "../data";
import Convert from "./Convert";

const Translate = () => {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Enter text:</label>
          <input
            name="text"
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        label={"Select a language"}
        options={languageOptions}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output:</h3>
      <Convert language={language} text={text} />
    </div>
  );
};
export default Translate;
