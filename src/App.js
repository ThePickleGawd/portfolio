import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Articles from "./Pages/Articles";
import About from "./Pages/About";

// Components
import Navbar from "./Components/Navbar";

// MUI
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Util/theme";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
