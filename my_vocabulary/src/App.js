import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
//상세페이지
import AddWord from './components/AddWord'
import Header from './components/Header'
import Home from './components/Home'
import Edit from './components/Edit'
// firebase
import { db } from './firebase'
import { getDoc, doc, getFirestore, updateDoc } from 'firebase/firestore'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/add" exact component={AddWord} />
      <Route path="/edit/:word" component={Edit} />
    </div>
  )
}

export default App
