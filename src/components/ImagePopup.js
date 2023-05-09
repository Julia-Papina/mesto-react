import React from "react";

function ImagePopup({card, onClose}){
    return(
        <div className={`popup popup_type_image  ${card.link ? "popup_opened" : ""}`}>
         <div className="popup__container popup__container_image">
           <img className="popup__open-image" src={card.link} alt={card.name}/>
           <p className="popup__place">{card.name}</p>
           <button className="button popup__close" type="button" onClick={onClose}/>
         </div>
        </div>
         )
}

export default ImagePopup




