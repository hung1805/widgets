import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import { items, colorOptions } from "./data";
import Route from "./components/Route";
import Header from "./components/Header";

const App = () => {
  const [selected, setSelected] = useState(colorOptions[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/wikisearch">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={colorOptions}
          selected={selected}
          label="Select A Color:"
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
};
export default App;
