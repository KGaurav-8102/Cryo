import React from 'react'
import '../styles/components/button.scss'

export default function button(content, icon="", color="blue") {
     return (
          <button className={`${color}`}>
               {content} {icon}
          </button>
     )
}
