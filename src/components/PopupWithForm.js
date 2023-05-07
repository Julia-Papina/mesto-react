import React from "react"

function PopupWithForm({ name, title, buttonText, children, isOpen, onClose, id}) {
    return (

    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
        <form name={name} id={id} className="popup__container" noValidate>
          <button className="popup__close" type="button" onClick={onClose}/>
          <h2 className="popup__title">{title}</h2>
            <fieldset className="popup__field">
              {children}
              <button className="popup__button" type="submit">
                {buttonText || "Сохранить"}
                </button>
            </fieldset>  
       </form>   
    </div>
    )

}


export default PopupWithForm

