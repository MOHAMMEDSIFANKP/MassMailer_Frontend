import React from 'react'
import { StickyNavbar } from '../Components/NavBar'
import { MembersTable } from '../Components/Table'

function Homepage() {
  return (
   <>
   <StickyNavbar/>
   <div className='mx-10 mt-2'>
    <MembersTable/>
   </div>
   </>
  )
}

export default Homepage