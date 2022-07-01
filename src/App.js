import "./App.css";
import Nav from "./Components/Nav/Nav";
import MobileNav from "./Components/Nav/MobileNav";
import useWindowDimensions from "./Helpers/WindowDimentions";
import MainBody from "./Components/Body/Body";
import { Fragment } from "react";
function App() {
  const { height, width } = useWindowDimensions();

  if (width <= 800) {
    return (
      <Fragment>
        <MobileNav />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Nav />
        <MainBody />
      </Fragment>
    );
  }
}

export default App;
