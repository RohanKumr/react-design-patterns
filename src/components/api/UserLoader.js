import React, { useEffect, useState } from 'react'

export default function CurrentUserLoader({ children }) {

  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        const api = `https://jsonplaceholder.typicode.com/users/1`
        const response = await fetch(api);
        const data = await response.json();
        setUser(data);
        console.log(data);
      }, 2000);
    })();
  }, [])


  return (
    React.Children.map(children, child => {
      if(React.isValidElement(child)) {
        return React.cloneElement(child, { user });
      }
      return child
    })
  )
}
