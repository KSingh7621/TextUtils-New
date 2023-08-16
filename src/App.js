import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react'
import Alert from './components/Alert'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode has been enabled', 'success')
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been enabled', 'success')
    }
  }
  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
