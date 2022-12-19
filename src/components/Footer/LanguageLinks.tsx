import { Link } from "../../types/Component";

function LanguageLinks(props: { languageLinks: Link[] }) {
  return (
    <ul className="footer__list">
      {
        props.languageLinks.map(item => {
          const classes = `footer__list-item ${item.title === 'English' ? 'footer__list-link_active' : ''}`
          return <li key={item.title} className={classes}>
            <a className="link footer__list-link" href={item.link}>
              {item.title}
            </a>
          </li>
        })
      }
    </ul>
  );
}

export default LanguageLinks;
