import React from "react";

import Hint from "../../layouts/hint/Hint";

export default function Page1() {
  return (
    <div>
      <div className="heading">Page 1</div>
      <Hint onClick={() => alert("Page 1 alert!")}>Page 1 hint</Hint>
    </div>
  );
}
