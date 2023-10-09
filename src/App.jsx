import { Route, Routes } from 'react-router'
import StudentData from './Component/StudentData/StudentData'
import ViewData from './Component/ViewData/ViewData'
import EditEmp from './Component/EditStudent/EditStu'
import SignUp from './Component/SignUp/SignUp'
import SignIn from './Component/SignIn/SignIn'


function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<ViewData />} />
      <Route path='/Add' element={<StudentData />} />
      <Route path='/edit/:id' element={<EditEmp />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
    </>
  )
}

export default App
