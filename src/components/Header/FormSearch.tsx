import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormSearch(props: { stateForm: boolean; onStateFormChange: Function }) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();


  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trackName = inputValue.trim();

    if (trackName) {
      navigate(`/search/${trackName}`);
      handleHideForm();
    }
    
    setInputValue('');
  }

  function handleHideForm() {
    setInputValue('');
    props.onStateFormChange();
  }

  function handleNameMusic(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  const buttonClass = `form-search ${props.stateForm ? 'shown-form' : ''}`;

  return (
    <form className={buttonClass} action="#" onSubmit={handleSubmitForm}>
      <input className="form-search__input" type="text" placeholder="Search for music..."
        value={inputValue} onChange={handleNameMusic} />

      <button className="form-search__button" type="button" onClick={handleHideForm}>
        <svg className="form-search__button-img form-search__img-cancel bi bi-x-lg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </button>

      <button className="form-search__button" type="submit">
        <svg className="form-search__button-img form-search__img-search bi bi-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
  );
}

export default FormSearch;
