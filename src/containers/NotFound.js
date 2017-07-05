import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div>
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/">返回首页 </Link>
    </div>
  );
};

export default NotFound;
