import { Link } from "../../types/Component"

function FooterHeadLinks(props: { title: string; links: Link[] }) {
  return (
    <div className="footer__column">
      <h4 className="footer__column-title">{props.title}</h4>
      {props.links.map(
        item => {
          return <a key={item.title}
            className="link footer__column-link"
            href={item.link}>
            {item.title}
          </a>
        }
      )}
    </div>
  );
}

export default FooterHeadLinks;