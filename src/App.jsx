import { Aboutme } from "./Components/Aboutme/Aboutme";
import { Banner } from "./Components/Banner/Banner";
import { Hardskills } from "./Components/Hardskills/Hardskills";
import { GlobalStyles } from "./GlobalStyles";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Banner />
      <Hardskills />
      <Aboutme />
    </>
  );
}
