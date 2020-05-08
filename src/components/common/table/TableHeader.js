import React, { Component } from 'react';
import { ASC } from '../../../constants/options';

class TableHeader extends Component {
  onSortClick = event => {
    this.props.onClick(event.target.id);
  };

  getSortStyle = () => {
    if (this.props.sortOptions.column === this.props.id) {
      if (this.props.sortOptions.order === ASC)
        return (
          <span
            style={{
              left: '3px',
              display: 'inline-block',
              border: 'solid 5px transparent',
              margin: '4px 4px 0 3px',
              'border-bottom': 'solid 7px #F80',
              'border-top-width': '0',
            }}
          ></span>
        );
      return (
        <span
          style={{
            left: '3px',
            display: 'inline-block',
            border: 'solid 5px transparent',
            margin: '4px 4px 0 3px',
            'border-top': 'solid 7px #F80',
            'border-top-width': '0',
          }}
        ></span>
      );
    }
    return null;
  };

  render() {
    return (
      <span id={this.props.id} onClick={this.onSortClick} style={{ cursor: 'pointer' }}>
        {this.props.headerValue}
        {this.getSortStyle()}
      </span>
    );
  }
}

export default TableHeader;
