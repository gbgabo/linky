import React, { ReactElement, Fragment } from "react";
import { Slider, StyleRules } from "@material-ui/core";
import { ColorPicker } from "../pickers";
import { CreateCSSProperties, CSSProperties } from "@material-ui/styles";

type styles = any;

type BackgroundStylerProps = {
  page: styles;
  onChange: (selector: string, rules: styles) => void;
};

export default function BackgroundStyler({
  page,
  onChange,
}: BackgroundStylerProps): ReactElement {
  function valuetext(value: number) {
    return `${value}%`;
  }

  const handleBackgroundChange = (value: string | Array<string>) => {
    console.log(`No customize: ${value}`);
    let backgroundStyle;
    value.length === 1
      ? (backgroundStyle = "var(--bg-colors)")
      : (backgroundStyle =
          "linear-gradient(var(--gradient-angle), var(--bg-colors))");
    onChange("page", {
      "--bg-colors": value,
      background: `${backgroundStyle}`,
    });
  };

  return (
    <Fragment>
      <ColorPicker
        label="Color"
        addLabel="Gradient"
        value={page["--bg-colors"]}
        onChange={(value) => handleBackgroundChange(value)}
      />
      {page["--bg-colors"].length === 1 ? null : (
        <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          onChange={(e, value) =>
            onChange("page", { "--gradient-angle": `${value}deg` })
          }
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={5}
          marks
          min={0}
          max={360}
        />
      )}
    </Fragment>
  );
}
