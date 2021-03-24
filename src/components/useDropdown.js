// Custom Hook (Dropdown)

import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  // Set Id for each dropdown
  const id = `use-dropdown-${label.replace(" ", "").toLowercase()}`;

  const Dropdown = () => {
    <label htmlFor={id}>
      {label}

      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>;
  };

  // To use it as a hook
  return [state, Dropdown, setState];
};

export default useDropdown;
