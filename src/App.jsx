import { Aboutme } from "./Components/Aboutme/Aboutme";
import { Banner } from "./Components/Banner/Banner";
import { GlobalStyles } from "./GlobalStyles";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Banner />
      <Aboutme />
    </>
  );
}
