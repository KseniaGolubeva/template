import FooterBodyLinks from "./FooterBodyLinks";
import FooterLogo from "./FooterLogo";

function FooterBody() {
  return (
    <section className="footer__body">
      <div className="wrapper">
        <div className="footer__body-content">
          <FooterBodyLinks />
          <FooterLogo />
        </div>
      </div>
    </section>
  );
}

export default FooterBody;