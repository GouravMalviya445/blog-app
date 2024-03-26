import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authServices from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authServices.getCurrentUser()
      .then(userData => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [loading])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-black'>
      <div className='w-full block text-white'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <h1 className='h-screen w-full bg-black grid place-items-center'>
      <img src="/images/Dual Ball-1s-200px.svg" alt="" />
    </h1 >
  )
}

export default App