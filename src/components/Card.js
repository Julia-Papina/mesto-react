import React from "react";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({card, onCardLike, onCardClick}) {
  

    const currentUser = useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwner = card.owner._id === currentUser._id;
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // переменная для кнопки лайка
    const cardLikeButtonClassName = ( 
    `button cards__like ${isLiked ? 'cards__like_active' : ""}` 
     );

     //обработчик для selectedCard. пробрасываем в компонент Card сквозь компонент Main -
    // в виде пропса onCardClick с нужными значениями данных карточек
    function handleCardClick() {
     onCardClick(card)
   }

   function handleLikeClick() {
    onCardLike(card)
   }


return (
    
    <div className="cards__item">
      <img src={card.link} 
           alt={card.name} 
           className="cards__image" 
           onClick={handleCardClick} />
      {isOwner && (
      <button className="button cards__delete-button" 
              type="button" 
              aria-label="Удалить пост">
      </button>)}
      <div className="cards__info">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__like-container">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" aria-label="Поставить лайк"></button>
          <span className="cards__like-count">{card.likes.length}</span>
        </div>
       
      </div> 
    </div>
 


)
}
export default Card