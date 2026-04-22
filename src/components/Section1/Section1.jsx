import React from 'react'
import NavBar from './navBar'
import Page1Content from './Page1Content'

const Page1 = (props) => {

  return (
    <div className="h-screen w-full">
      <NavBar />
      <Page1Content users={props.users} />  
    </div>
  )
}

export default Page1
