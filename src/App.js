import "./App.css";
import Nav from "./Components/Nav/Nav";
import MobileNav from "./Components/Nav/MobileNav";
import useWindowDimensions from "./Helpers/WindowDimentions";
import { useState } from "react";
function App() {
  const { height, width } = useWindowDimensions();

  if (width <= 800) {
    return <MobileNav />;
  } else {
    return <Nav></Nav>;
  }
}

export default App;
