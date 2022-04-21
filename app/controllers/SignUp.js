/* arrayUsers */
const myUsers = []
export let profile

export const SignUpController = (req, res) => {
  const { username, avatar } = req.body
  profile = avatar;
  myUsers.push({ username, avatar })
  res.status(201).send('OK')
}
