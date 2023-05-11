import React from "react"

function Card(card) {
  //обработчик для selectedCard. пробрасываем в компонент Card сквозь компонент Main -
  // в виде пропса onCardClick с нужными значениями данных карточек
    function handleCardClick() {
        card.onCardClick(card)
    }


return (
    
    <div className="cards__item">
      <img src={card.link} 
           alt={card.name} 
           className="cards__image" 
           onClick={handleCardClick} />
      <button className="button cards__delete-button" type="button" aria-label="Удалить пост"></button>
      <div className="cards__info">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__like-container">
          <button className="button cards__like" type="button" aria-label="Поставить лайк"></button>
          <span className="cards__like-count">{card.likes.length}</span>
        </div>
       
      </div> 
    </div>
 


)
}
export default Card