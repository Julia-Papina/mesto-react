import React from "react";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function Main({onEditProfile, onEditAvatar, onAddPlace}) {




    return (
        <main className="content">
        <section className="profile" aria-label="Профиль">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src="#" alt="Аватар" />
            <div className="profile__avatar-edit"  onClick={onEditAvatar}
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__info-name">Жак-Ив Кусто</h1> 
            <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}
            />
            <p className="profile__info-job">Исследователь океана</p> 
          </div>
          <button className="button profile__add-button" type="button" aria-label="Добавить фото" onClick={onAddPlace}
          />
        </section>
        <section className="cards" aria-label="Карточки">
        </section>

      


   

        <template id="cards" />
      </main>
    )
}
export default Main