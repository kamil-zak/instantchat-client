import { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface IColorPickerProps {
  onChange: (color: string) => void;
  color: string;
}

const ColorPicker = ({ onChange, color }: IColorPickerProps) => {
  const [pickerColor, setPickerColor] = useState(color);

  useEffect(() => {
    const setColor = () => onChange(pickerColor);
    const timeout = setTimeout(setColor, 100);
    return () => clearTimeout(timeout);
  }, [pickerColor, onChange]);

  useEffect(() => {
    setPickerColor(color);
  }, [color]);

  return <HexColorPicker color={pickerColor} onChange={setPickerColor} />;
};

export default ColorPicker;
