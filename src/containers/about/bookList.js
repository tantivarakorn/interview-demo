import React, {Component} from 'react';
import {connect} from "react-redux";

class BookList extends Component {

  render() {

    return (
      <div className="book-list">
        <h3>ชื่อหนังสือ : {this.props.book.name}</h3>
        <h4>ชื่อผู้เขียน : {this.props.book.writer}</h4>
        <p>สรุปเนื้อหา : {this.props.book.message}</p>
        <p>วันที่อ่านจบ : {this.props.book.date}</p>
        <div className="btn">
          <button className="edit-btn" onClick={() => this.props.dispatch({type: 'EDIT_BOOK', id: this.props.book.id})}>แก้ไข</button>
          <button className="delete-btn" onClick={() => this.props.dispatch({type: 'DELETE_BOOK', id: this.props.book.id})}>ลบ</button>
        </div>
      </div>
    );
  }
}

export default connect()(BookList);
