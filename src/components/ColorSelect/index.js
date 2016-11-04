'use strict';
import React, {PropTypes} from 'react';
import { customization } from '../../config/objects.json';
const deck = customization.deck;

class ColorSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // component has not been rendered to DOM yet
    // process any data here if needed
  }

  componentDidMount() {
    // component has been rendered to DOM
  }

  componentWillReceiveProps(nextProps) {
    // component has already rendered but will re-render when receives new props
  }

  componentWillUnmount() {
    // component is about to be removed from DOM
    // clean up any event listeners ect. here
  }

  render() {
    const style = Object.assign({}, {}, this.props.style);
    const className = 'color-select-container';

    return (
      <div
        className={`${className} ${this.props.className}`}
        style={style}
      >
        <div 
          className='color-select' 
          onClick={() => this.props.changeDeckColor(deck.colors.red)} 
        />
      </div>
    )
  }
}

ColorSelect.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string

};

ColorSelect.defaultProps = {
  style: {},
  className: ''
};

export default ColorSelect;