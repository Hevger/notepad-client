import React from "react";
import ReactDOM from "react-dom";
import RightPanel from "./RightPanel";

it("Renders component properly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RightPanel />, div);
});
