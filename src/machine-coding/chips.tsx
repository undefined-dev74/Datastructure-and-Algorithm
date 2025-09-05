import { useState } from "react";

function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (value.length > 0) {
        setChips((prev) => [...prev, value]);
      }
      setValue("");
    }
  };

  const handleChipClose = (idx) => {
    setChips(chips.filter((chip, i) => i !== idx));
  };

  return (
    <div className="main-container">
      <h2>Chips Input</h2>
      <div className="flex items-center justify-center gap-2">
        {chips.map((chip, idx) => (
          <div
            key={idx}
            className="h-8 py-1 d-block px-3 rounded-2xl bg-slate-200 cursor-pointer"
            onClick={() => handleChipClose(idx)}
          >
            {chip}
            <span className="ml-2 text-red-400">X</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default ChipsInput;
