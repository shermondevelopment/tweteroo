const tweets = []

const TweetsController = (req, res) => {
  const { username, tweet } = req.body
  tweets.push({ username, tweet })
  res.status(201).send('OK')
}

export default TweetsController