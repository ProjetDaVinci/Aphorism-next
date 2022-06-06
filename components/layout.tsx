import Link from "next/link";
import Footer from "./footer";
import Header from "./header";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="global-wrapper">
      <Header />
      <div className="content-wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
