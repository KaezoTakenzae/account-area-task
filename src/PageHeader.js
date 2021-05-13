import React from 'react';
import OrderHistoryIcon from './OrderHistoryIcon';

const PageHeader = ({ title }) => {
  const bannerStyle = {
    backgroundImage:
      'linear-gradient(-45deg, rgb(143, 237, 245) 0%, rgb(17, 198, 212) 100%)'
  };

  return (
    <div className="column is-12">
      <div className="box acc-banner" style={bannerStyle}>
        <div className="box-top">
          <div v-if="icon" className="box-icon">
            <OrderHistoryIcon width="30" height="30" color="#fff" />
          </div>
          <p className="title is-5 is-marginless has-text-white is-hidden-tablet">
            {title}
          </p>
        </div>

        <div className="box-header is-justified">
          <p className="title is-5 is-marginless has-text-white is-hidden-mobile">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
