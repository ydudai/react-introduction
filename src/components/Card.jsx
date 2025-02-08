import React from 'react'

export default function Card(props) {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    }
    
    return(
        <div style={myStyle}>
                <p>{props.title} </p>
                <p>{props.content}</p>
        </div >
    )
}
