import { useState } from "react";
import ColorPicker from "./ColorPicker";

const meta = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  argTypes: {
    onChange: { action: "colorChanged" },
  },
};

export default meta;

export const Interactive = {
  render: () => {
    const [selectedColor, setSelectedColor] = useState("#3b82f6");

    return (
      <div className="p-8 bg-white min-h-[220px]">
        <ColorPicker
          selectedColor={selectedColor}
          onChange={(color) => {
            setSelectedColor(color);
          }}
        />
        <p className="mt-6 text-sm text-gray-600">Selected color: {selectedColor}</p>
      </div>
    );
  },
};
