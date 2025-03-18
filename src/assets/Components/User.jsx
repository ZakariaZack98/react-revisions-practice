import React, { useEffect, useState } from 'react'

const User = () => {
  const [randomUser, setRandomUser] = useState(null)
  const [userData, setUserData] = useState([])
  useEffect(() => {
    console.log('fetching data...')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setUserData(data))
    .catch(err => console.error(err.message))
  }, [])

  const handleClick = () => {
    let randomNumber = () => Math.floor(Math.random() * (9 - 0)) + 0;
    setRandomUser(userData[randomNumber()]);
  }

  return (
    <div>
      <button className='bg-blue-600 text-white px-4 py-2 rounded-xl' onClick={handleClick}>Click to fetch random user</button>
      {randomUser && (<div>
        <p>Name: {randomUser.name}</p>
        <p>UserNane: {randomUser.username}</p>
        <p>email: {randomUser.email}</p>
      </div>)}
    </div>
  )
}

export default User