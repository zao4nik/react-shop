/* eslint-disable no-unreachable */
function BasketItem(props) {
  const {
    id,
    displayName,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {displayName}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(id)}
      >
        remove
      </i>
      x{quantity}{' '}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add
      </i>
      = {price.finalPrice * quantity}
      <span
        className="secondary-content"
        onClick={() => removeFromBasket(id)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export default BasketItem;
