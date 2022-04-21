import { profile } from "./SignUp.js"

const tweets = []

export const TweetsController = (req, res) => {
  const { username, tweet } = req.body
  tweets.push({ username, avatar: profile, tweet })
  res.status(201).send('OK')
}

export const TweetsReadController = (req, res) => {
  const lastTenTweets = tweets.slice(-10)
  res.status(200).json(lastTenTweets)
}
