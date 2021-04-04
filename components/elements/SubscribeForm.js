import { Check, Spinner } from '@styled-icons/fa-solid'
import axios from 'axios'
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import tw from 'twin.macro'
import Button from './Button'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const token = await executeRecaptcha('subscribe_form')
    const recaptcha = await axios.post('/api/recaptcha', { token })

    if (recaptcha.data.score > 0.5) {
      const res = await axios.post('/api/subscribe', { email })
      setStatus(res.status === 200 ? 'success' : 'idle')
    } else {
      setStatus('idle')
    }
  }

  return (
    <form tw='flex mb-4' onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='Your email'
        onChange={(e) => setEmail(e.target.value)}
        tw='w-full px-2.5 py-1.5 rounded-l text-sm-none bg-white'
      />
      <Button
        type='submit'
        disabled={status !== 'idle'}
        css={[
          tw`w-44 rounded-l-none`,
          status === 'success' && tw`bg-success text-black hover:bg-success`,
        ]}
      >
        {
          {
            idle: 'Subscribe',
            sending: <Spinner tw='animate-spin' size='14' />,
            success: <Check size='14' />,
          }[status]
        }
      </Button>
    </form>
  )
}
