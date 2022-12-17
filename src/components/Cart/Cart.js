import React from "react";
import '../Cart/Cart.css'

export default function Cart() {
  return (
    <div>
      <h1 className="cart-title">cart title</h1>
      <p className="cart-description">
        Hide Скрыть/Gizlət düyməsi cari iş kitabının gizlədilməsini təmin
        edir, Unhide Отобразить/Göstər düyməsi vasitəsilə isə gizlədilmiş
        kitabı yenidən ekranda göstərilir.
      </p>
      <button>Read More</button>
    </div>
  );
}
