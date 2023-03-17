import Nav from "./Nav";
import Meta from "./Meta";
import NavContacts from "./NavContacts";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="top">
        <NavContacts />
        <Nav />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
