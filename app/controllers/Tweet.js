import { profile } from "./SignUp.js"

const tweets = []

export const TweetsController = (req, res) => {
  const { username, tweet } = req.body
  if(!username || !tweet) {
    return res.status(400).send('Todos os campos são obrigatórios!')
  }
  tweets.push({ username, avatar: profile, tweet })
  res.status(201).send('OK')
}

export const TweetsReadController = (req, res) => {
  const lastTenTweets = tweets.slice(-10)
  res.status(200).json(lastTenTweets)
}
