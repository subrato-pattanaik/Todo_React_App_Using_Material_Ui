import { Typography } from "@material-ui/core";
import React from "react";

function Title() {
  return (
    <div className="paper">
      <div className="todoImage"></div>

      <Typography style={{ marginTop: "50px" }} variant="h2">
        Todo Application
      </Typography>
    </div>
  );
}

export default React.memo(Title);
