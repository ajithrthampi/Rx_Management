import { useState } from 'react'
import Login from '../src/pages/login/Login'
import Table1 from './pages/table/Table1'
import { TableContext } from './context/TableContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <TableContext.Provider value={{ open, setOpen }}>
        <BrowserRouter >
          <Routes>
            <Route path="" element={<Login />} />
            <Route path="/table" element={<Table1 />} />
          </Routes>
        </BrowserRouter>
      </TableContext.Provider >
    </>
  )
}

export default App
