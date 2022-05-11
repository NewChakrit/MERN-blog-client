import React, { useState, useCallback, useEffect } from "react";
import ReactQuill from "@adrianhelvik/react-quill";

function Wrapper() {
  const [disableBold, setDisableBold] = useState(false);
  const [value, setValue] = useState(null);

  const options = {
    modules: {
      toolbar: [
        [disableBold ? null : "bold", "italic", "underline"].filter(Boolean), // toggled buttons
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ header: [1, 2, 3, 4, 5, false] }],
        [{ align: [] }],
        ["link", "image", "video"],
        ["clean"], // remove formatting button
        // ['formula'], Requires window.katex to be set
      ],
      clipboard: {
        matchVisual: false,
      },
    },

    theme: "snow",
  };

  const onChange = useCallback(
    (contents) => {
      if (disableBold) {
        setValue({
          ops: contents.ops.map((x) => {
            x = { ...x };
            if (x && x.attributes && x.attributes.bold) {
              x.attributes = { ...x.attributes };
              delete x.attributes.bold;
              if (!Object.keys(x.attributes).length) {
                delete x.attributes;
              }
            }
            return x;
          }),
        });
      } else {
        setValue(contents);
      }
    },
    [disableBold]
  );

  return (
    <>
      <ReactQuill value={value} onChange={onChange} options={options} />
    </>
  );
}

export default Wrapper;
