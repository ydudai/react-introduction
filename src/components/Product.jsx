import React from 'react'

export default function Product(props) {
  return (
    <div style={{backgroundColor: "lightblue"}}>
        <labal>{props.name} {props.price} </labal>
      
    </div>
  )
}
