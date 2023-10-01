import { useState } from 'react'
import Login from '../src/pages/login/Login'
import Table1 from './pages/table/Table1'
import { TableContext } from './context/TableContext'

function App() {

  const [open, setOpen] = useState(false)

  return (
    <>
    <TableContext.Provider  value={{  open, setOpen }}>
       {/* <Login /> */}
      <Table1 />
    </TableContext.Provider>
     
    </>
  )
}

export default App
