import React, { useState } from 'react'
import { Route } from 'react-router-dom'
//상세페이지
import AddWord from './components/AddWord'
import Header from './components/Header'
import Home from './components/Home'
import Edit from './components/Edit'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={AddWord} />
        <Route path="/edit/:word" component={Edit} />
      </div>
    </div>
  )
}

export default App
