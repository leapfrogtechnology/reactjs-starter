import React, { Component } from 'react';

const PageButtonComponent = props => <button {...props}>{props.children}</button>;

class Pagination extends Component {
  pageButtonStyle = {
    border: '1px solid #f4f7f9',
    backgroundColor: '#fff',
    color: '#000',
  };

  pageAnchorStyle = {
    padding: '0 10px',
  };

  render() {
    const { pages, onPageChange } = this.props;

    return (
      <div className="container">
        <PageButtonComponent onClick={() => onPageChange(1)}>First</PageButtonComponent>
        <PageButtonComponent onClick={() => onPageChange(1)}>Previous</PageButtonComponent>
        {pages.map(pageNumber => (
          <PageButtonComponent key={pageNumber} onClick={() => onPageChange(pageNumber)} style={this.pageButtonStyle}>
            <a href="#" style={this.pageAnchorStyle}>
              {pageNumber}
            </a>
          </PageButtonComponent>
        ))}
        <PageButtonComponent onClick={() => onPageChange(1)}>Next</PageButtonComponent>
        <PageButtonComponent onClick={() => onPageChange(pages.length)}>Last</PageButtonComponent>
      </div>
    );
  }
}

export default Pagination;
