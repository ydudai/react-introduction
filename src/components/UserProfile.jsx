import React from 'react'

export default function UserProfile(props) {
  return (
    <div>
      <p>username = {props.username}</p>
      <p>avatarUri = {props.avatarUri}</p>
    </div>
  )
}
