
import React from "react";
import './index.css';
import logo from './images/logotip_mesto.svg'

function App() {
  return (
    
  <div className="root">
  <div className="page">
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого Место" />
    </header>
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="#" alt="Аватар" />
          <div className="profile__avatar-edit" />
        </div>
        <div className="profile__info">
          <h1 className="profile__info-name">Жак-Ив Кусто</h1> 
          <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" />
          <p className="profile__info-job">Исследователь океана</p> 
        </div>
        <button className="button profile__add-button" type="button" aria-label="Добавить фото" />
      </section>
      <section className="cards" aria-label="Карточки">
      </section>
      <div className="popup popup_type_edit">
        <form name="edit-profile" id="edit-profile" className="popup__container" noValidate>
          <button className="popup__close" type="button" />
          <h2 className="popup__title">Редактировать профиль</h2>
          <fieldset className="popup__field">
            <input type="text" required minLength={2} maxLength={40} className="popup__input popup__input_type_name" name="name" placeholder="Имя" defaultValue id="user-name" />
            <span className="popup__error user-name-error" />
            <input type="text" minLength={2} maxLength={200} className="popup__input popup__input_type_job" name="job" required placeholder="О вас" defaultValue id="user-job" />
            <span className="popup__error user-job-error" />
            <button type="submit" className="popup__button">Сохранить</button>
          </fieldset>
        </form>
      </div>
      <div className="popup popup_type_add">
        <form name="add-card" id="add-card" className="popup__container" noValidate>
          <button className="popup__close" type="button" />
          <h2 className="popup__title">Новое место</h2>
          <fieldset className="popup__field">
            <input type="text" minLength={2} maxLength={30} className="popup__input popup__input_type_place" name="name" placeholder="Название" defaultValue required id="card-name" />
            <span className="popup__error card-name-error" />
            <input type="url" className="popup__input popup__input_type_link" name="link" placeholder="Ссылка на картинку" defaultValue required id="card-link" />
            <span className="popup__error card-link-error" />
            <button className="popup__button" type="submit">Создать</button>
          </fieldset>  
        </form>   
      </div>
      <div className="popup popup_type_image" id="popup-image">
        <div className="popup__container popup__container_image">
          <img className="popup__open-image" src="#" />
          <p className="popup__place" />
          <button className="button popup__close" type="button" />
        </div>
      </div>
      <div className="popup popup_type_delete-confirm">
        <form className="popup__container" name="delete" noValidate>
          <button className="button popup__close" type="button" />
          <h3 className="popup__title">Вы уверены?</h3>
          <fieldset className="popup__field">
            <button className="popup__button" type="submit">Да</button>
          </fieldset>
        </form>  
      </div>
      <div className="popup popup_type_avatar">
        <form name="change-avatar" id="add-avatar" className="popup__container" noValidate>
          <button className="popup__close" type="button" />
          <h2 className="popup__title">Обновить аватар</h2>
          <fieldset className="popup__field">
            <input type="url" className="popup__input popup__input_type_avatar" name="avatar" id="edit-avatar" placeholder="Ссылка на аватар" required /> 
            <span className="popup__error edit-avatar-error" />
            <button className="popup__button" type="submit">Сохранить</button>
          </fieldset>  
        </form>   
      </div>
      <template id="cards" />
    </main>
  </div>
  <footer className="footer">
    <p className="footer__text">© 2023 Mesto Russia</p>
  </footer> 
  {/*  */}
</div>

  );
}

export default App;
