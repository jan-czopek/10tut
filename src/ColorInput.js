import { TextField } from "@mui/material"
import colorNames from 'colornames'

const ColorInput = ({ colorName, setColorName, setHexColorName }) => {
  return (
    <TextField
      label='Enter color name'
      id="colorInput"
      value={colorName}
      onChange={(e) => {
        setColorName(e.target.value);
        setHexColorName(colorNames(e.target.value));
      }}
    />
  )
}

export default ColorInput