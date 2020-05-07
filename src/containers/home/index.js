import React, { Component } from 'react'
import './home.css'
import { Layout } from 'antd'
import { connect } from 'react-redux'

const { Content } = Layout

class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const name = this.addName.value
    const writer = this.addWriter.value
    const message = this.addSummary.value
    const date = this.addDate.value

    const data = {
      id: new Date(),
      name,
      writer,
      message,
      date,
      editing: false
    }
    console.log('data', data)

    this.props.dispatch({
      type: 'ADD_BOOK',
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
          {/*<h1 className='header'>Interview Test</h1>*/}
          {/*<div className="container">*/}

            {/*<h2 className="title">1. สร้างหน้าเว็บไซต์สำหรับบันทึกหนังสือที่อ่านแล้ว</h2>*/}
            {/*<p>*/}
              {/*โดยมี field มี่ต้องการ ชื่อหนังสือ ชื่อคนเขียน เนื้อหาโดยสรุปของหนังสือ และวันที่เวลาที่อ่านจบ*/}
              {/*ต้องสามารถกดบันทึกได้และต้องนำค่าที่บันทึกไปเก็บไว้ใน redux store*/}
            {/*</p>*/}

            {/*<h2 className="title">2. สร้างหน้าโชว์ลิสท์รายการหนังสือที่อ่านแล้ว</h2>*/}
            {/*<p>*/}
              {/*นำลิสท์รายการหนังสือที่อยู่ใน store ที่ได้จากในข้อ 1 มาแสดง (ข้อ 1 และ 2 ต้องอยู่คนละหน้ากัน )*/}
            {/*</p>*/}
          {/*</div>*/}

          {/*<br/>*/}
          {/*<br/>*/}

          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <h3>ชื่อหนังสือ</h3>
              <input required type="text" placeholder="ชื่อหนังสือ"
                     ref={(input) => this.addName = input}/>
              <h3>ชื่อผู้เขียน</h3>
              <input required type="text" placeholder="ชื่อผู้เขียน"
                     ref={(input) => this.addWriter = input}/>
              <h3>เนื้อหาโดยสรุปของหนังสือ</h3>
              <textarea required cols="30" rows="10" placeholder="เนื้อหาโดยสรุปของหนังสือ"
                        ref={(input) => this.addSummary = input}/>
              <h3>วันเวลาที่อ่านจบ</h3>
              <input required type="date"
                     ref={(input) => this.addDate = input}/>
              <button>Submit</button>
            </form>
          </div>

        </Content>

      </Layout>
    )
  }
}

export default connect()(Home);
