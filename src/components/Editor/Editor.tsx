/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import SunEditor, { SunEditorReactProps } from "suneditor-react";
import "./Editor.css";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import {
  align,
  fontColor,
  hiliteColor,
  list,
  table,
  formatBlock,
  textStyle,
  image,
  link,
  fontSize,
  math,
  font,
  blockquote,
  lineHeight,
} from "suneditor/src/plugins";

interface Props extends SunEditorReactProps {
  onChange: (e: string) => void;
}

const CustomEditor: React.FC<Props> = ({ onChange, ...props }) => {
  return (
    <div className={"suneditor"}>
      <SunEditor
        {...props}
         
        setOptions={{
          minWidth: "200px",
          height: "400px",
          placeholder: "Type something...",
          plugins: [
            align,
            formatBlock,
            fontColor,
            hiliteColor,
            list,
            table,
            textStyle,
            image,
            link,
            fontSize,
            math,
            font,
            blockquote,
            lineHeight,
          ],
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            [
              "bold",
              "italic",
              "underline",
              "strike",
              "subscript",
              "superscript",
              "fontColor",
              "hiliteColor",
              "align",
              "outdent",
              "indent",
              "list",
              "removeFormat",
            ],
            ["blockquote", "save"],
            ["link", "image", "table"],
          ],
        }}
        onSave={(e) => onChange(e)}
        name="editor"
      />
    </div>
  );
};

export default React.memo(CustomEditor);
