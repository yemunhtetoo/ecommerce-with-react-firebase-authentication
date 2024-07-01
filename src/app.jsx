import './app.css'
import { Outlet } from 'react-router-dom'
import NavItems from './components/NavItems'
import Footer from './components/Footer'

export function App() {
  return (
    <>
      <NavItems />
      <div className='min-vh-100'>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}
