import React from 'react'
import { toast } from 'react-toastify'

const IsValidate = ({
  name,
  username,
  password,
  email,
  phone,
  address,
  city,
  gender,
}) => {
  let isProcced = true
  const emailRegex = /^([a-zA-Z0-9._%+-]+)(@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
  let errorMessage = 'Please enter the value in :  '
  if (username === null || username === '') {
    isProcced = false
    errorMessage += ' username '
  }
  if (name === null || name === '') {
    isProcced = false
    errorMessage += ', name '
  }
  if (email === null || email === '') {
    isProcced = false
    errorMessage += ', email '
  } else if (!emailRegex.test(email)) {
    isProcced = false
    errorMessage += ', email '
  }
  if (password === null || password === '') {
    isProcced = false
    errorMessage += ', password '
  }
  if (address === null || address === '') {
    isProcced = false
    errorMessage += ', address '
  }
  if (gender === null || gender === '') {
    isProcced = false
    errorMessage += ', gender '
  }
  if (city === null || city === '') {
    isProcced = false
    errorMessage += ', city '
  }
  if (phone === null || phone === '') {
    isProcced = false
    errorMessage += ', phone'
  }
  if (!isProcced) {
    toast.warning(errorMessage)
  }
  return isProcced
}

export default IsValidate
