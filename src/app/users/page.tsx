import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getUsers() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users
}

export default async function page() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const users: User[] = await getUsers();
  return (
    <>
      <div> Users (Next 15) </div>
      {
        // eslint-disable-next-line react/jsx-key
        users.map(user => <p>{user.name}</p>)
      }
    </>
  )
}
