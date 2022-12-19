import FooterBody from "./FooterBody";
import FooterHead from "./FooterHead";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <FooterHead />
      </div>

      <FooterBody />
    </footer>
  );
}

export default Footer;