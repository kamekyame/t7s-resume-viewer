import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Theme, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    "& a": {
      textDecoration: "none",
      color: "black",
      display: "inline-block",
    },
    "& a:active": {
      color: "black",
    },
  }),
  linkDiv: {
    display: "flex",
    "&>div": {
      margin: "1em",
    },
  },
  div: {
    margin: "5px 0",
  },
  img: {
    height: "1.5em",
  },
});

export default function () {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <footer className={classes.footer}>
      <div className={classes.linkDiv}>
        <div>
          <Link to="/">履歴書一覧</Link>
        </div>
        <div>
          <Link to="/about">ABOUT</Link>
        </div>
        <div>
          <Link to="/version">VERSION</Link>
        </div>
      </div>
      <div className={classes.div}>
        © 2021 SuzuTomo
      </div>
    </footer>
  );
}
