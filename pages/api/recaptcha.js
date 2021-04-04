import axios from 'axios'

export default async (req, res) => {
  const response = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    null,
    {
      params: {
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: req.body.token,
      },
    }
  )

  if (response.data.success) {
    res.status(200).json({ score: response.data.score })
  } else {
    res.status(500).json({ error: response.data['error-codes'][0] })
  }
}
