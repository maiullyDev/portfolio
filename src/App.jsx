import { Aboutme } from "./Components/Aboutme/Aboutme";
import { Banner } from "./Components/Banner/Banner";
import { Contact } from "./Components/Contact/Contact";
import { Hardskills } from "./Components/Hardskills/Hardskills";
import { Myprojects } from "./Components/Myprojects/Myprojects";
import { GlobalStyles } from "./GlobalStyles";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Banner />
      <Hardskills />
      <Aboutme />
      <Myprojects />
      <Contact />
    </>
  );
}
