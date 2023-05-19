
import React from "react";
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false); //переменные состояния
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({}); //стейт переменная для отображения большой картинки
  const [currentUser, setCurrentUser] = React.useState({}); 
  const [cards, setCards] = React.useState([]);
 

  React.useEffect(() => {
    api.getProfile()
    .then((profileUserInfo) => setCurrentUser(profileUserInfo))
    .catch((error) => console.log(`Ошибка: ${error}`))

    api.getInitialCards()
    .then((data) => {
      setCards(
        data.map((card) => ({
          _id: card._id,
          name: card.name,
          link: card.link,
          likes: card.likes,
          owner: card.owner,
        }))
      )
    })
    .catch((error) => console.log(`Ошибка: ${error}`))
  }, [])

  


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

   function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id)

    if (isLiked) {
      api.deleteLike(card._id)
      .then((newCard) => 
        setCards((state) =>
        state.map((c) => (c._id === card._id ? newCard : c))
      )
      )
      .catch((error) => console.log(`Ошибка: ${error}`))  
   } else {
    api.addLike(card._id)
    .then((newCard) => 
        setCards((state) =>
        state.map((c) => (c._id === card._id ? newCard : c))
      )
      )
      .catch((error) => console.log(`Ошибка: ${error}`))
   }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
    setCards((state) => state.filter((item) => item._id !== card._id))
    closeAllPopups()  
  })
  .catch((error) => console.log(`Ошибка: ${error}`))
  }

  function handleUpdateUser(newUserInfo) {
    api.editProfile(newUserInfo)
    .then((data) => {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch((error) => console.log(`Ошибка: ${error}`))
  }
    

  return (
  <CurrentUserContext.Provider value={currentUser}>
  <div className="root">
    <div className="page">
      
      <Header />
      <Main
        onEditProfile={handleEditProfileClick} //пропсы Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}   
        onCardClick={setSelectedCard}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}    
      />

    <EditProfilePopup isOpen={isEditProfilePopupOpen} 
                      onClose={closeAllPopups}
                      onUpdateUser={handleUpdateUser} /> 
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
  </CurrentUserContext.Provider>

  );
}

export default App;
