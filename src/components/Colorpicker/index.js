import React, { useState } from "react";
import { CompactPicker } from "react-color";

export default function Colorpicker({ color, setColor }) {
    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };

    return (
        <CompactPicker
            color={color}
            onChangeComplete={handleChangeComplete}
            styles={{ marginBottom: "10px" }}
        />
    );
}
