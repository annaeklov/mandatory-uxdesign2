import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";

import QuizPage from "./pages/QuizPage.js";
import StatsPage from "./pages/StatsPage.js";
import AboutPage from "./pages/AboutPage.js";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";

export default function App() {
  const [sidebarIsOpen, updateSidebarIsOpen] = useState(false);

  return (
    <Router>
      <Container>
        <Header onClickMenuButton={() => updateSidebarIsOpen(true)} />
        <Sidebar
          onClickMask={() => updateSidebarIsOpen(false)}
          sidebarIsOpen={sidebarIsOpen}
          onClickLink={() => updateSidebarIsOpen(false)}
        />
        <Route exact path="/" component={QuizPage} />
        <Route path="/stats" component={StatsPage} />
        <Route path="/about" component={AboutPage} />
      </Container>
    </Router>
  );
}
