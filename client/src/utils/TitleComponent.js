// TitleComponent.jsx

import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent = ({ title }) => {
  var defaultTitle = 'EA';
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};

export default TitleComponent;
