import React from 'react'
import { Route } from 'react-router-dom'
import { db } from './fb/firebase'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deltetDoc,
} from 'firebase/firestore'

import AddWord from './components/AddWord'
import Header from './components/Header'
import Home from './components/Home'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/add" component={AddWord} />
    </div>
  )
}

export default App
