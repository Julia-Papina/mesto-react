import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card"


function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {

  const [userName, setUserName] = useState("") //переменные состояния
  const [userDescription, setuserDescription] = useState("")
  const [userAvatar, setUserAvatar] = useState("")
  const [cards, getInitialCards] = useState([]) //переменная cards с пустым массивом по умолчанию

  //эффект при монтировании компонента, совершает апи запрос за польз-ми данными
  useEffect(() => {
    api.getProfile()
    .then((profileUserInfo) => {
      setUserName(profileUserInfo.name) //задали полученные данные в соответ-щие переменные состояния
      setuserDescription(profileUserInfo.about)
      setUserAvatar(profileUserInfo.avatar)
    })
    .catch((error) => console.log(`Ошибка: ${error}`))


    api.getInitialCards()
    .then((cardsData) => {
      getInitialCards(
        cardsData.map((data) => ({
          likes: data.likes,
          name: data.name,
          link: data.link,
          cardId: data._id,
        }))
        )
    })
    .catch((error) => console.log(`Ошибка: ${error}`))
  }, [])






    return (
        <main className="content">
        <section className="profile" aria-label="Профиль">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
            <div className="profile__avatar-edit"  onClick={onEditAvatar}
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__info-name">{userName}</h1> 
            <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}
            />
            <p className="profile__info-job">{userDescription}</p> 
          </div>
          <button className="button profile__add-button" type="button" aria-label="Добавить фото" onClick={onAddPlace}
          />
        </section>
        <section className="cards" aria-label="Карточки">
          {cards.map((card) => (
            <Card 
            key={card.cardId}
            likes={card.likes}
            name={card.name}
            link={card.link}
            onCardClick={onCardClick}
            />
          ))}
        </section>
      </main>
    )
}
export default Main