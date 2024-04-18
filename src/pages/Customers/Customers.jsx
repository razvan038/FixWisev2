import React from 'react'
import AddButton from '../../components/Add Button/AddButton'
import Sidebar from '../../components/Sidebar/Sidebar'



function Customers() {
  return (
    <>
    <div className='dashboard_grid'>
    <Sidebar />
    <div className='main_content'>
        <h1>Customers</h1>
        <AddButton />
        </div>
    </div>
    </>
  )
}

export default Customers