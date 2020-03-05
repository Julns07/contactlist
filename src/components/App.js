import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import contacts from "./List.js"

function App() {
  return (
    <Router>
      <Route path="/contact/:id" component={contacts}></Route>
      <Route exact path="/" component={Home}></Route>
    </Router>
  )
}

export default App
