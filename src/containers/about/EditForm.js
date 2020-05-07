import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'

const { Content } = Layout

class EditForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const editName = this.addName.value
    const editWriter = this.addWriter.value
    const editMessage = this.addSummary.value
    const editDate = this.addDate.value

    const data = {
      id: new Date(),
      editName,
      editWriter,
      editMessage,
      editDate
    }
    console.log('data', data)

    this.props.dispatch({
      type: 'UPDATE',
      id: this.props.book.id,
      data
    });

    this.addName.value = ''
    this.addWriter.value = ''
    this.addSummary.value = ''
    this.addDate.value = ''
  }

  render() {
    return (
      <Layout className="layout">
        <Content>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <h3>ชื่อหนังสือ</h3>
              <input required type="text" placeholder="ชื่อหนังสือ"
                     ref={(input) => this.addName = input}
                     defaultValue={this.props.book.name}
              />
              <h3>ชื่อผู้เขียน</h3>
              <input required type="text" placeholder="ชื่อผู้เขียน"
                     ref={(input) => this.addWriter = input}
                     defaultValue={this.props.book.writer}
              />
              <h3>เนื้อหาโดยสรุปของหนังสือ</h3>
              <textarea required cols="30" rows="10" placeholder="เนื้อหาโดยสรุปของหนังสือ"
                        ref={(input) => this.addSummary = input}
                        defaultValue={this.props.book.message}
              />
              <h3>วันที่อ่านจบ</h3>
              <input required type="date"
                     ref={(input) => this.addDate = input}
                     defaultValue={this.props.book.date}
              />
              <button>บันทึก</button>
            </form>
          </div>

        </Content>

      </Layout>
    )
  }
}

export default connect()(EditForm);
