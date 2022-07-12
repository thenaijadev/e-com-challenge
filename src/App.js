import "./App.css";
import Nav from "./Components/Nav/Nav";
import MobileNav from "./Components/Nav/MobileNav";
import useWindowDimensions from "./Helpers/WindowDimentions";
import MainBody from "./Components/Body/Body";
import Carousel from "./Components/Mobile/Carousel";
import { Fragment } from "react";
import MobileDescription from "./Components/Mobile/MobileDescription";
function App() {
  const { height, width } = useWindowDimensions();
  console.log(height, width);

  if (width <= 800) {
    return (
      <Fragment>
        <MobileNav />
        <Carousel></Carousel>
        <MobileDescription></MobileDescription>
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
