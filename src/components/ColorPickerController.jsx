import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import PropTypes from "prop-types";

const ColorPickerController = ({ hideControler = false, selectedColor }) => {
  const [color, setColor] = useState("rgba(255,255,255,1)");
  return (
    <div>
      <ColorPicker
        value={color}
        onChange={(e) => {
          setColor(e);
          selectedColor(e);
        }}
        hideControls={hideControler}
        hideAdvancedSliders
        hideEyeDrop
        hideColorGuide
        hideInputType
      />
    </div>
  );
};
ColorPickerController.propTypes = {
  hideControler: PropTypes.bool,
  selectedColor: PropTypes.func,
};
export default ColorPickerController;
