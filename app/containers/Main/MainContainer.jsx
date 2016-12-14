import React, { PropTypes } from 'react';
import { NavBar } from 'components';
import { main } from './styles.scss';

class MainContainer extends React.Component {

  render () {
    return (
      <div>
        <NavBar />
        <div className={main}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainContainer;
