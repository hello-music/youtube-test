import React, {PropTypes} from 'react';

class MainContainer extends React.Component {

  render () {
    return (
      <div>
        <h3>{`Main`}</h3>
        {this.props.children}
      </div>
    );
  }
}

MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainContainer;
