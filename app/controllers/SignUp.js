/* arrayUsers */
const myUsers = []
export let profile

export const SignUpController = (req, res) => {
  const { username, avatar } = req.body
  if(!username || !avatar) {
    return res.status(400).send('Todos os campos são obrigatórios!')
  }
  profile = avatar;
  myUsers.push({ username, avatar })
  res.status(201).send('OK')
}
