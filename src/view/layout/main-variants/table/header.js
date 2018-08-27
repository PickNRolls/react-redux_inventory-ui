import React from 'react';

var Header = (props) => {
  return (
    <header className="table-layout__header">
      <div className="main-layouts__blur table-layout__name">
        Название
      </div>

      <div className="main-layouts__blur table-layout__price">
        Цена
      </div>

      <div className="main-layouts__blur table-layout__photo-amount">
        Фото
      </div>

      <div className="main-layouts__blur table-layout__guarantee">
        Гарантия до
      </div>

      <div className="main-layouts__blur table-layout__purchase-date">
        Дата покупки
      </div>

      <div className="main-layouts__blur table-layout__responsible">
        Ответственный
      </div>
    </header>
  );
}

export default Header;
