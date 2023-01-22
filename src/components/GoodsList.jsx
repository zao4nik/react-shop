import GoodsItem from './GoodsItem.jsx';

function GoodsList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Ни чего нет</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item, i) => (
        <GoodsItem
          key={i}
          {...item}
          addToBasket={addToBasket}
        />
      ))}
    </div>
  );
}

export default GoodsList;
