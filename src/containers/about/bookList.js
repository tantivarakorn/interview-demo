import React, {Component} from 'react';
import {connect} from "react-redux";

class BookList extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.book.name}</h2>
        <h3>{this.props.book.writer}</h3>
        <p>{this.props.book.message}</p>
        <p>{this.props.book.date}</p>
        <button onClick={() => this.props.dispatch({type: 'EDIT_BOOK', id: this.props.book.id})}>แก้ไข</button>
        <button onClick={() => this.props.dispatch({type: 'DELETE_BOOK', id: this.props.book.id})}>ลบ</button>
      </div>
    );
  }
}

export default connect()(BookList);
