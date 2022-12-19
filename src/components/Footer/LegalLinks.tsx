import { Link, LinkCopyright } from "../../types/Component";

function LegalLinks(props: {
  copyright: LinkCopyright,
  legalLinks: Link[]
}) {
  return (
    <ul className="footer-legal footer__list">
      <li className="footer__list-item">
        <a className="link footer__list-link" href={props.copyright.link}>
          {props.copyright.title}
        </a>
        © {props.copyright.copyright}
      </li>
      {
        props.legalLinks.map(item => {
          return <li key={item.title} className="footer__list-item">
            <a className="link footer__list-link" href={item.link}>
              {item.title}
            </a>
          </li>
        })
      }
    </ul>
  );
}

export default LegalLinks;
