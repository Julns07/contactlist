import React from "react"
import { Link } from "react-router-dom"
import "../styles/List.css"
import "../styles/index.css"
import data from "../names.json"

export default function(props) {
  return (
    <div className="wrapper">
      <div id="title">
        <Link to="/">Contacts</Link>
      </div>
      <ul className="contacts">
        {data.map((contact, i) => (
          <li className="contacts-list" key={"product-link" + i}>
            <Link to={`/contact/${contact.id}`}>
              <img
                className="side-prof-pic"
                src={contact.picture.thumbnail}
                alt="img"
              />
              <span className="contact-name">
                {contact.name.first} {contact.name.last}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
