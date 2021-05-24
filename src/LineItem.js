import React from 'react';

const LineItem = props => {
  let { item: {
    title,
    quantityInfo,
    image,
    price
  }} = props;
  return (
    <div className="column is-6">
      <div className="media">
        <div className="media-left">
          <img
            alt="Product bars"
            className="image"
            src={image}
          />
        </div>
        <div className="media-content">
          <div>
            <p className="product-title">
              {title}
            </p>
            <p className="product-variants">
              {quantityInfo}
            </p>
          </div>
        </div>
        <div className="media-right">
          <p className="product-price">${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default LineItem;
