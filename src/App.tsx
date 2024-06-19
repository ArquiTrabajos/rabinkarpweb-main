import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import UFPSFooter from './components/UFPSFooter'




function App() {
  return (
    <>
      <div className='min-h-full h-full relative'>
        <Header />
        <div className='h-4/6 overflow-y-scroll'>
          <Outlet />
        </div>
        <UFPSFooter />
      </div>
    </>
  )
}

export default App
