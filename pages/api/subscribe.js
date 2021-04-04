import axios from 'axios'

export default async (req, res) => {
  await axios
    .post(
      process.env.MAILCHIMP_SUBSCRIBE_URL,
      {
        email_address: req.body.email,
        status: 'subscribed',
      },
      {
        headers: {
          authorization: `Basic ${process.env.MAILCHIMP_API_KEY}`,
        },
      }
    )
    .then((response) => {
      res.status(response.status)
    })
    .catch((error) => {
      let code = error.response.status
      if (error.response.data.title === 'Member Exists') {
        code = 200
      }
      res.status(code).json({ error: error.response.data.title })
    })
}
