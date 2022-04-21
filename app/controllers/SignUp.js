/* arrayUsers */
const myUsers = []

const SignUpController = (req, res) => {
  const { username, avatar } = req.body
  myUsers.push({ username, avatar })
  res.status(201).send('OK')
}

export default SignUpController