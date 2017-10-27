import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import './styles/base.css'

const App = ({title}) => (
  <div className="title">
    {title}
  </div>
)
App.propTypes={
  nombre :PropTypes.string.isRequired
  edad :PropTypes.number.isRequired
  hobbies :PropTypes.array
}
render(
  <App 
  nombre='kenet'
  edad ={20}
  
  />,
  document.getElementById('root')
)
