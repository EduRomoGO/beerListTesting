'use strict';

import React, {PropTypes} from 'react';

export default class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        {this.props.email}
        <img src={this.props.src} className="img-rounded"/>
      </div>
    );
  }
}

Avatar.propTypes = {
  email: PropTypes.string,
  src: PropTypes.string,
};