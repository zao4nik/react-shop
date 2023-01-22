/* eslint-disable comma-dangle */
/* eslint-disable space-infix-ops */
import BasketItem from './BasketItem.jsx';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity,
    decQuantity,
  } = props;

  const totalPrice = order.reduce(
    (sum, el) => sum + el.price.finalPrice * el.quantity,
    0
  );

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: {totalPrice}</li>
      <li className="collection-item">
        <button className="btn">
          Оформить
        </button>
      </li>
      <i
        className="material-icons basket-close"
        onClick={handleBasketShow}
      >
        close
      </i>
    </ul>
  );
}

export default BasketList;
