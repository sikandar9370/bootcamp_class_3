import React from 'react'

function Dinner(din){
    return (<div>
        <h1>Today we are serving {din.dishName}.</h1>
        <h1>We are also serving {din.sweetDish}</h1>
    </div>)
}

function Breakfast(brkfast){
    return (<div>
        <h1>In breakfast we have {brkfast.brk}</h1>
        <h1>We also have {brkfast.drink}</h1>
    </div>)
}

export {
    Dinner,
    Breakfast
  }