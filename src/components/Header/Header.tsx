import Track from "./Track";
import Audio from "./Audio"
import FormSearch from "./FormSearch";
import HeaderBurger from "./HeaderBurger";
import Navigation from "./Navigation";
import Controls from "./Controls";

import { Link } from "react-router-dom";
import React, { useState } from "react";

function Header() {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);


  function handleHideForm() {
    setIsShowForm(false);
  }

  function handleShowForm() {
    setIsShowForm(true);
  }

  return (
    <header className="header">
      <Audio />

      <Track />

      <div className="header__body">
        <Controls />

        <Link className="logo link" to="/search">
          <img className="logo__img" src="/img/logo.png" alt="Логотип" />
        </Link>

        <Navigation onStateFormChange={handleShowForm} />

        <HeaderBurger />
      </div>

      <FormSearch stateForm={isShowForm} onStateFormChange={handleHideForm} />
    </header>
  );
}

export default Header;