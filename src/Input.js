import { useState } from "react";

function Input({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Renk</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button>Ekle</button>
    </form>
  );
}

export { Input };
