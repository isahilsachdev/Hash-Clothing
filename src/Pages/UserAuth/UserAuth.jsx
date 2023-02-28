import React, { useState } from 'react'
import SignUp from './SignUp';

const UserAuth = () => {
  const [page, SetPage] = useState("signup")
  return (
    {
      (page === "signup") ? (
        <SignUp />
      ) : (
        <SignUp />
      )
    }
  )
}

export default UserAuth