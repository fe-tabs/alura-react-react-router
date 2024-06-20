import { Outlet } from "react-router-dom";
import Banner from "components/Banner";
import Footer from "components/Footer";

export default function PageContent() {
  return(
    <main>
      <Banner/>

      <Outlet/>

      <Footer/>
    </main>
  );
}