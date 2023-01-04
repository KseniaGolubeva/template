import { Link } from "../../types/Component";

function HeadNav(props: { links: Link[] }) {
  return (
    <ul className="main__nav">
      {
        props.links.map(link => {
          const classes = `main__nav-item ${ link.title === 'Top Results' ? 'main__nav-link_active' : ''}`
          return <li key={link.title} className={classes}>
            <a className="link main__nav-link" href={link.link}>
              {link.title}
            </a>
          </li>
        })
      }
    </ul>
  );
}

export default HeadNav;