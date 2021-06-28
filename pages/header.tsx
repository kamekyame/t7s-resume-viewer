import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function () {
  return (
    <AppBar position="sticky">
      <Toolbar style={{ color: "black" }}>
        <div style={{ flexGrow: 1 }}>
          t7s 履歴書ビューア
        </div>
      </Toolbar>
    </AppBar>
  );
}
