import { Box } from '@mui/material'

const ColorShow = ({ colorName, hexColorName }) => {
  const fontColor = hexColorName === undefined ? 'black' : hexColorName.substr(1, 2) === '00' ? 'white' : 'black';
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        borderColor: 'black',
        border: '1px solid grey',
        backgroundColor: colorName === '' ? 'white' : colorName
      }}
    >
      <p style={{ color: fontColor }} >
        {colorName === '' ? 'Empty value' : colorName}
      </p>
      <p style={{ color: fontColor }} >
        {hexColorName === '' ? null : hexColorName}
      </p>
    </Box>
  )
}

export default ColorShow