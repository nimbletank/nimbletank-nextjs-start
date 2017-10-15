import React from 'react'

const Masthead = ({ title, links }) => {
  return (
    <div>
      <h1>{title}</h1>
      {links &&
        links.map((item, index) => {
          return (
            <a href={item.href} key={`masthead${index}`}>
              {item.text}
            </a>
          )
        })}
    </div>
  )
}

export default Masthead
