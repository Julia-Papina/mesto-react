
import React from "react";
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false); //переменные состояния
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({}) //стейт переменная для отображения большой картинки


  function handleEditProfileClick() {  //обработчики переменных состояния
     setIsEditProfilePopupOpen(true); //поменяли состояние
  }

   function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
   }

   function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);

   }

   //обработчик пропса onClose компонента PopupWithForm 
   function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({})


   }
    

  return (
    
  <div className="root">
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick} //пропсы Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}   
        onCardClick={setSelectedCard}    
      />

    <PopupWithForm 
      name="popupEditProfile"
      id="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isEditProfilePopupOpen} //задаем значение isOpen с помощью переменной состояния
      onClose={closeAllPopups}  
    >
      <fieldset className="popup__field">
       <input 
          required 
          type="text"
          minLength={2}
          maxLength={40} 
          className="popup__input popup__input_type_name" 
          name="name" 
          placeholder="Имя" 
          id="user-name" />
         <span className="popup__error user-name-error" />
       <input 
        type="text"
         minLength={2} 
         maxLength={200} 
         className="popup__input popup__input_type_job"
         name="job" 
         required 
         placeholder="О вас" 
         id="user-job" />
        <span className="popup__error user-job-error" />
    </fieldset>

    </PopupWithForm>

    <PopupWithForm 
      name="popupAddCard"
      id="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    >
      <fieldset className="popup__field">
       <input 
          required 
          type="text"
          minLength={2}
          maxLength={40} 
          className="popup__input popup__input_type_place" 
          name="name" 
          placeholder="Название" 
          id="card-name" />
         <span className="popup__error card-name-error" />
      <input  
          required 
          type="url"
          className="popup__input popup__input_type_link" 
          name="link" 
          placeholder="Ссылка на картинку" 
          id="card-link" />
          <span className="popup__error card-link-error" />
    </fieldset>

    </PopupWithForm>


    <PopupWithForm 
      name="popupEditAvatar"
      id="add-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    >
      <fieldset className="popup__field">
       <input 
          required 
          type="url"
          minLength={2}
          maxLength={40} 
          className="popup__input popup__input_type_avatar" 
          name="avatar" 
          placeholder="Ссылка на аватар" 
          id="edit-avatar" />
         <span className="popup__error edit-avatar-error" />
    </fieldset>
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
      <Footer />
  </div>

  );
}

export default App;
