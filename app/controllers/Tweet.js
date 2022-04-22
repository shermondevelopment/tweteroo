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
  const {  page } = req.query
  const offset = parseInt(page) === 1 ? 0 : page
  const lastTenTweets = tweets.reverse().slice((parseInt(page) - 1) * 10, parseInt(page) * 10)
  console.log((parseInt(page) - 1) * 10, parseInt(page) * 10);
  res.status(200).json(lastTenTweets)
}

export const TweetsReadUser = (req, res) => {
  const { username } = req.params
  const filterTwettsUser = tweets.filter( item => item.username.toLocaleLowerCase() === username.toLocaleLowerCase() )
  return res.status(200).json(filterTwettsUser)
}