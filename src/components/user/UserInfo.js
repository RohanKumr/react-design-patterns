import React from 'react'

export default function UserInfo({ user }) {
  const { name, email, website } = user || {};
  return (
    user ?
      <div>
        <h3> Name: { name }</h3>
        <p>Email: { email }</p>
        <p>website: { website }</p>
      </div> : <div>Loading...</div>
  )
}
