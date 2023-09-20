import ColorShow from "./ColorShow";
import ColorInput from "./ColorInput";
import { useState } from 'react'

function App() {
  const [colorName, setColorName] = useState('');
  const [hexColorName, setHexColorName] = useState('');

  return (
    <>
      <ColorShow
        colorName={colorName}
        hexColorName={hexColorName}
      />
      <ColorInput
        colorName={colorName}
        setColorName={setColorName}
        setHexColorName={setHexColorName}
      />
    </>
  );
}

export default App;
