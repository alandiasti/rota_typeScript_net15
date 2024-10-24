import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getUsers(userId: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await fetch("https://jsonplaceholder.typicode.com/users/"+userId);
    const users = await response.json();
    return users
  }
export default async function User({params}) {
    const user = await getUsers(params.userId)
  return (
    <div>
        <p>Nome: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}
