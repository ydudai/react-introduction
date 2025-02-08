import React from 'react'

export default function Notification(props) {
    const message = props.message;
    const type = props.type;
    if (type == "success") {
        return (
            <div style={{backgroundColor: "lightblue"}}>
                {message}
            </div>
        )
    } else {
        return (
            <div style={{backgroundColor: "red"}}>
                {message}
            </div>
        )
    }
}
