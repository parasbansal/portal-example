import React from "react";

import Hint from "../../layouts/hint/Hint";

export default function Page2() {
  return (
    <div>
      <div className="heading">Page 2</div>
      <Hint onClick={() => alert("Page 2 alert!")}>Page 2 hint</Hint>
    </div>
  );
}
