import React from 'react'
import Page1 from './components/Section1/Section1'
import Section1 from './components/Section1/Section1';

const App = () => {

const users = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60",
    intro: "",
    tag: "Satisfied",
    color: "green",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60",
    intro: "",
    tag: "Underserved",
    color: "pink",
  },
  {
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=60",
    intro: "",
    tag: "Underbanked",
    color: "red",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1686244745260-132b72a7e825?w=600&auto=format&fit=crop&https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3Dq=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBkdW98ZW58MHx8MHx8fDA%3D",
    intro: "",
    tag: "New User",
    color: "blue",
  },
  {
    img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
    intro: "",
    tag: "Loyal Customer",
    color: "purple",
  },
];
  return (
    <div>
      <Section1 users={users} />
      
    </div>
  )
}

export default App
