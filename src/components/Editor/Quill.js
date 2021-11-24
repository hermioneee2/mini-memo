import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CustomToolbar = () => (
  <div>
    <div id="toolbar">
      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-underline"></button>
      <select class="ql-color">
        <option value="rgb(0, 0, 0)" />
        <option value="rgb(230, 0, 0)" />
        <option value="rgb(255, 153, 0)" />
        <option value="rgb(255, 255, 0)" />
        <option value="rgb(0, 138, 0)" />
        <option value="rgb(0, 102, 204)" />
        <option value="rgb(153, 51, 255)" />
        <option value="rgb(255, 255, 255)" />
        <option value="rgb(250, 204, 204)" />
        <option value="rgb(255, 235, 204)" />
        <option value="rgb(204, 224, 245)" />
        <option value="rgb(235, 214, 255)" />
        <option value="rgb(187, 187, 187)" />
        <option value="rgb(102, 185, 102)" />
      </select>
      <button class="ql-link"></button>
    </div>
  </div>
);

class EditorComponent extends Component {
  constructor(props) {
    super(props);
  }

  modules = {
    toolbar: "#toolbar",
  };

  formats = [
    //'font',

    "bold",
    "italic",
    "underline",
    "link",
    "image",
    "color",
  ];

  render() {
    const { value, onChange } = this.props;
    return (
      <div style={{ height: "350px" }}>
        <ReactQuill
          style={{ height: "300px" }}
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          value={value || ""}
          onChange={(content, delta, source, editor) =>
            onChange(editor.getText())
          } //can extract only text by getText
        />
        <CustomToolbar />
      </div>
    );
  }
}
export default EditorComponent;
