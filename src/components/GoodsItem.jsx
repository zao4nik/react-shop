/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
function GoodsItem(props) {
  const {
    mainId: id,
    displayName,
    displayType,
    displayDescription,
    price,
    displayAssets,
    addToBasket = Function.prototype,
  } = props;

  const [full_background] = displayAssets.map((el) => el.full_background);
  // console.log('🚀 ~ props', props);

  return (
    <div
      className="card"
      id={id}
    >
      <div className="card-image">
        <img
          src={full_background}
          alt={displayName}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        {displayType}
        <br />
        {displayDescription}
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              displayName,
              price,
            })
          }
        >
          Купить
        </button>
        <span
          className="right"
          style={{ fontSize: '1.8rem' }}
        >
          {price.finalPrice}
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
