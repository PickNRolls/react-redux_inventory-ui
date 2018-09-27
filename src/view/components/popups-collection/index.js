import React from 'react';

import './main.css';

const collectionOfInners = {
  0: null,
  1: {
    title: 'Добавление нового места',
    content: (
      <React.Fragment>
        <input
          type="text"
          className="popup__places-input popup__places-input--top"
          placeholder="Введите название"
        />

        <div className="popup__places-map">
          <img
            src="/img/places-map.png"
            alt=""
            className="popup__places-map-pic"
          />
          <input
            type="text"
            className="popup__places-input popup__places-input--map"
            placeholder="Улица"
          />
        </div>

        <button className="popup__places-submit">Добавить место</button>
      </React.Fragment>
    )
  },
  2: {
    title: 'Добавление нового человека',
    content: (
      <React.Fragment>
        <button className="popup__people-add-photo">Добавить фото</button>

        <input type="text" className="popup__people-input" placeholder="Имя Фамилия"/>
        <input type="text" className="popup__people-input" placeholder="Должность"/>
        <input type="email" className="popup__people-input" placeholder="e-mail"/>

        <button className="popup__people-submit">Добавить человека</button>
      </React.Fragment>
    )
  }
};

var PopupsCollection = props => {
  if (!props.enabled) return null;
  var index = props.popupIndex;
  if (collectionOfInners[index] == null) return null;

  var title = collectionOfInners[index].title;
  var innerContent = collectionOfInners[index].content;

  return (
    <div className="popup-overlay">
      <div className="popup-wrap">
        <button className="popup-wrap__close" onClick={props.closePopup}>✕</button>
        <h3 className="popup-wrap__title">{ title }</h3>
        { innerContent }
      </div>
    </div>
  );
}

export default PopupsCollection;
