import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Aboutme } from "./Components/Aboutme/Aboutme";
import { Banner } from "./Components/Banner/Banner";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Hardskills } from "./Components/Hardskills/Hardskills";
import { Myprojects } from "./Components/Myprojects/Myprojects";
import { ScrollToTopButton } from "./Components/ScrollToTopButton/ScrollToTopButton";
import { GlobalStyles } from "./GlobalStyles";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Banner />
      <ScrollToTopButton />
      <Hardskills />
      <Aboutme />
      <Myprojects />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}
