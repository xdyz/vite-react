import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Ceshi from './pages/ceshi'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Ceshi></Ceshi>
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}123123防守打法
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener 1232222223"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p> */}
      {/* </header> */}

      {/* <Link to={'/first'}>
        <button>first</button>
      </Link>
      <NavLink to={'/first'}>
        <button>123</button>
      </NavLink> */}
      {/* <Routes> */}
      {/* <Route path='/first' element={<Login></Login>}>
          <Route path='child' element={<Login></Login>} />
        </Route> */}
      {/* </Routes> */}


      <Login></Login>


    </>
  )
}



export default App
