import Image from 'next/image'
import SubscribeForm from './SubscribeForm'

function NewsletterComp() {
  return (
    <div className='font-roboto text-sm'>
      <h1 className="text-3xl font-regular font-gochi mb-5">Just 3 Things - Newsletter</h1>
      <p className='mb-6'>
        Every Thursday, the latest issue is sent to hundreds of people. </p><p className='font-bold mb-4'>Each message includes:</p>
      <div className='font-gochi text-lg mb-10'>
        <div className='mb-4 flex items-center'>
          <p className='mr-4'>👉</p>
          <p>1 short idea from me </p>
        </div>
        <div className='mb-4 flex items-center'>
          <p className='mr-4'>🦉</p>
          <p>1 Idea or quote from someone else</p>
        </div>
        <div className='mb-4 flex items-center'>
          <p className='mr-4'>📖</p>
          <p>1 Recommendation: Book, Podcast, Movie, Song, Software, etc. </p>
        </div>

      </div>

      <p className='font-gochi text-xl mb-4'>Here's what to expect:</p>
      <div className='font-roboto  mb-10'>

        <div className='mb-4 flex items-center'>
          <p className='mr-4'>✉️</p>
          <p>A <span className='font-bold'>short</span> email every Thursday.</p>
        </div>
        <div className='mb-4 flex items-center'>
          <p className='mr-4'>🕐</p>
          <p>Just 3 minutes or less of reading time.</p>
        </div>
        <div className='mb-4 flex items-center'>
          <p className='mr-4'>💎</p>
          <p>No spam. Just the highest quality ideas you’ll find on the web.</p>
        </div>

      </div>
      <p>Enter your email and sign up for free right now.</p>

      <div className='mt-10'>

        <SubscribeForm />
      </div>
    </div>
  )
}

export default NewsletterComp