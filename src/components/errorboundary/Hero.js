import React from 'react'

function Hero({heroName}) {
    if(heroName === "Bhumi"){
        throw new Error('She is Heroine')
    }
  return (
    <h3>{heroName}</h3>
  )
}

export default Hero