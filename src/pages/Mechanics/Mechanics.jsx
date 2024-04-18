import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import AddButton from '../../components/Add Button/AddButton'

function Mechanics() {
  return (
    <>
    <div className='dashboard_grid'>
    <Sidebar />
    <div className='main_content'>
        <h1>Mechanics</h1>
        <AddButton />
        </div>
    </div>
    </>
  )
}

export default Mechanics