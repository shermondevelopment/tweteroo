/* path */
import path from 'path'

/* fs */
import fs from 'fs'

/* arrayUsers */
const myUsers = []

export const SignUp = (req, res) => {
  const { username, avatar } = req.body
  myUsers.push({ username, avatar })
  res.status(201).send('OK')
}