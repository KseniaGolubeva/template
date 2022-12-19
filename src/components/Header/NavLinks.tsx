import { Link } from "../../types/Component";

function NavLinks(props: { links: Link[] }) {
  return (
    <>
      {
        props.links.map(item => {
          return <li key={item.title} className="navigation__item">
            <a className="link navigation__link" href={item.link}>
              {item.title}
            </a>
          </li>
        })
      }
    </>
  );
}

export default NavLinks;