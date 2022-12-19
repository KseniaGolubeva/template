import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormSearch() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  function handleNameMusic(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trackName = inputValue.trim();

    if (trackName) {
      navigate(`/search/${trackName}`);
      window.location.reload();
    }
    
  }

  function handleClear() {
    setInputValue('');
  }

  return (
    <form className="main__form" action="#" onSubmit={handleSubmitForm}>
      <input className="main__form-input" type="text" placeholder="never gonna give you up"
        value={inputValue} onChange={handleNameMusic} tabIndex={1} />
      
      <button className="main__form-button" type="button" onClick={handleClear}>
        <svg className="main__form-button-img bi bi-x-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>

      <span className="form__separator"></span>

      <button className="main__form-button" type="submit">
        <svg className="main__form-button-img bi bi-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
  );
}

export default FormSearch;