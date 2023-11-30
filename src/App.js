import { useState } from "react";
import { Input } from "./Input";
import { RemoveForm } from "./RemoveForm";

function App() {
  const [colors, setColors] = useState(["red", "green", "blue"]);

  const removeColorAtIndex = (indexToRemove) => {
    const updatedColors = colors.filter((_, index) => index !== indexToRemove);
    setColors(updatedColors);
  };

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };
  const keys = colors.map((_, index) => `colors_${index}`);

  const renderedColors = colors.map((color, index) => {
    return <li key={keys[index]}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>{renderedColors}</ul>
      <hr />
      <RemoveForm onSubmit={removeColorAtIndex} max={colors.length} />
    </div>
  );
}

export default App;
