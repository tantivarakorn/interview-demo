import React, { Component } from 'react'
import { Layout } from 'antd'
import BookList from './bookList'
import EditForm from './EditForm'
import { connect } from 'react-redux'
import '../home/home.css'

const { Content } = Layout

// const About = () => (
//   <Layout className="layout">
//     <Content>
//       <h1 className="header">รายการหนังสือที่อ่านจบ</h1>
//       <div className="container">
//       <p>
//       FutureSkill.co เว็บไซต์และแอพพลิเคชั่นเรียนรู้ทักษะรูปแบบใหม่ ที่ต้องการเพิ่มศักยภาพของคนไทยด้าน Technology Business และ Creativity <br/>
//       เราเห็นอุปสรรคใหญ่ที่สุดของบ้านเรา คือเรื่องทักษะและการพัฒนาตัวเอง จากสถิติพนักงานไทยกว่าครึ่งไม่พร้อมแข่งขันในยุค Digital เสียด้วยซํ้า <br/>นี่คือเหตุผลที่เราสร้าง FutureSkill ขึ้นมา โดยเรามีเป้าหมายที่ต้องการเปลี่ยนคน 100,000 คนภายในปี 2019
//       ขณะนี้เรากำลังขยายทีม และอยากชวนคนที่มีอุดมการณ์ที่ต้องการเห็นความเปลี่ยนแปลงที่จับต้องได้ มาร่วมกับเรา!
//       </p>
//       <img className="img" src="https://cdn-images-1.medium.com/max/1200/1*YUgt_aABOjm41Hapy1phqA.png" />
//       </div>
//     </Content>
//   </Layout>
// )

class About extends Component {

  render() {
    return (
      <Layout className="layout">
        <Content>
          <h1 className="header">รายการหนังสือที่อ่านจบ</h1>

          <div className="container-book">
            {this.props.books.addBook.map((book) => (
              <div key={book.id}>
                {book.editing ?
                  <EditForm key={book.id} book={book}/> :
                  <BookList key={book.id} book={book}/>}
              </div>
            ))}
          </div>
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state
  }
}

export default connect(mapStateToProps)(About)
