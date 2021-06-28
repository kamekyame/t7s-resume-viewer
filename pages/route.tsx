/// <reference lib="dom"/>
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Index from "./index.tsx";

import Header from "./header.tsx";
import Footer from "./footer.tsx";
/*import NotFound from "../components/404.tsx";


import Game from "./game/route.tsx";
import User from "./user/route.tsx";
import Tournament from "./tournament/route.tsx";
import Dev from "./dev/route.tsx";
*/

const theme = createTheme({
  palette: { // Material Design Color(https://material.io/resources/color/#!/?view.left=1&view.right=1&primary.color=FBD5A8&secondary.color=58AFDA)
    primary: {
      main: "#0aaaf5",
      light: "#69dbff",
      dark: "#007bc2",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ff64ff",
      light: "#ff99ff",
      dark: "#c927cb",
      contrastText: "#000000",
    },
  }, /*
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "filled",
        color: "secondary",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "secondary",
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiToggleButtonGroup: {
      defaultProps: {
        color: "secondary",
      },
    },
  },*/
});

function MainContents(props: { style: React.CSSProperties }) {
  const p = "/t7s-resume-viewer";
  return (<main style={props.style}>
    <Switch>
      <Redirect exact from={p + "/"} to={p + "/index"} />
      <Route path={p + "/index"} component={Index} />
    </Switch>
  </main>);
}

function Layout() {
  return (<BrowserRouter>
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <MainContents
        style={{
          flexGrow: 1,
          width: "90%",
          padding: "3em 0",
          margin: "0 auto",
        }}
      />
      <Footer />
    </div>
  </BrowserRouter>);
}

function Main() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </CssBaseline>
  );
}
ReactDOM.hydrate(<Main />, document.getElementById("main"));
