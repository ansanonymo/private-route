import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";

export default function NavAndFooter() {
  return (
    <>
      <Nav />
      {<Outlet />}
      <Footer />
    </>
  )
}
