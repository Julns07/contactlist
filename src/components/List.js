import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import data from "../names.json"
import "../styles/Single.css"
import emailIcon from "./icons/email.png"
import phoneIcon from "./icons/phone.png"
import globe from "./icons/globe.png"
import user from "./icons/user.png"
import arrow from "./icons/arrow.png"

export default function(props) {
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [lName, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [state, setState] = useState("")
  const [citie, setCity] = useState("")

  useEffect(() => {
    const id = props.match.params.id

    const contacts = data.find(contacts => contacts.id === Number(id))

    setName(contacts.name.first)
    setLName(contacts.name.last)
    setUrl(contacts.picture.large)
    setEmail(contacts.email)
    setPhone(contacts.phone)
    setState(contacts.location.state)
    setCity(contacts.location.city)
  }, [props.match.params])

  return (
    <div>
      <div className="single-view">
        <div className="background-prof">
          <Link to="/">
            <img id="arrow" alt="arrow" src={arrow} />
          </Link>
          <img className="prof-pic" src={url} alt="img" />
        </div>
        <p className="bottom-part single-name">
          <img src={user} alt="" />
          {name} {lName}
        </p>
        <p className="bottom-part single-email">
          <img src={emailIcon} alt="" />
          {email}
        </p>
        <p className="bottom-part single-phone">
          <img src={phoneIcon} alt="" />
          {phone}
        </p>
        <p className="bottom-part single-location">
          <img src={globe} alt="" />
          {citie}, {state}
        </p>
      </div>
    </div>
  )
}
