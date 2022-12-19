import NavLinks from "./NavLinks";

function Navigation(props: { onStateFormChange: Function }) {

  function handleShowForm() {
    props.onStateFormChange();
  }

  return (
    <nav className="navigation">
      <ul className="navigation__link-wrapper">
        <li className="navigation__item">
          <button id="buttonSearchNav" className="navigation__button-search" onClick={handleShowForm}>
            <svg className="navigation__button-img bi bi-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </li>

        <NavLinks links=
          {
            [
              { link: "#", title: "Home" },
              { link: "#", title: "Live" },
              { link: "#", title: "Music" },
              { link: "#", title: "Charts" },
              { link: "#", title: "Events" },
              { link: "#", title: "Features" },
            ]
          }
        />


        <li className="navigation__item">
          <a className="link navigation__user-link" href="#">
            <svg className="navigation__user-img bi bi-person-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
