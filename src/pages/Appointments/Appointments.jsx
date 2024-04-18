import React from 'react'
import AddButton from '../../components/Add Button/AddButton'
import Sidebar from '../../components/Sidebar/Sidebar'



function Appointments() {
  return (
    <>
    <div className='dashboard_grid'>
    <Sidebar />
    <div className='main_content'>
        <h1>Appointments</h1>
        <AddButton />
        </div>
    </div>
    </>
  )
}

export default Appointments