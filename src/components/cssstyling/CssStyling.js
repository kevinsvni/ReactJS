import React from 'react'
import './myStyle.css'

const inline_styling = {
    fontSize: '75px',
    color: 'blue'
}

function CssStyling(props) {
    let color = 'primary'
    let lgFont = props.largeFont ? 'large-font' : ''
  return (
    <div>
        <div style={inline_styling}>Inline CSS Styling</div>

        <div className={`${color} ${lgFont} font-style`}>Stylesheets CSS Styling</div>
    </div>
  )
}

export default CssStyling