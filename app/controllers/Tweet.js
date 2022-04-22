import { profile } from "./SignUp.js"

const tweets = []

export const TweetsController = (req, res) => {
  const { tweet } = req.body
  const { user } = req.headers
  if(!user || !tweet) {
    return res.status(400).send('Todos os campos são obrigatórios!')
  }
  tweets.push({ username: user, avatar: profile, tweet })
  res.status(201).send('OK')
}

export const TweetsReadController = (req, res) => {
  const {  page } = req.query
  if(page <= 0) {
    return res.status(400).send('Informe uma página válida!')
  }
  const lastTenTweets = tweets.reverse().slice((parseInt(page) - 1) * 10, parseInt(page) * 10)
  tweets.reverse()
  res.status(200).json(lastTenTweets)
}

export const TweetsReadUser = (req, res) => {
  const { username } = req.params
  const filterTwettsUser = tweets.filter( item => item.username.toLocaleLowerCase() === username.toLocaleLowerCase() )
  return res.status(200).json(filterTwettsUser)
}