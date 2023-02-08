import Image from 'next/image'
import SubscribeForm from './SubscribeForm'

function AboutComp() {
  return (
    <div className='font-roboto text-sm'>
      <h1 className="text-3xl font-bold font-gochi">About?</h1>
      <h2 className='my-5 text-xl font-bold font-gochi'>Nullius in verba = Take no one’s word for it</h2>
      <p className='mb-4'>
        "Nullius in verba" is a Latin phrase meaning "On the word of no one." It represents the idea that knowledge should be based on evidence, rather than authority or tradition. This motto is a reminder that understanding should always be open to questioning and that new discoveries can fundamentally change what we know about the world.
      </p>
      <p className='mb-4'>If you want to be happy and successful, you are looking for a non-common outcome, and you're never going to get any non-common outcome by doing and reading the things common people do and read.</p>
      <p className='my-5 text-xl font-bold font-gochi'>It takes a level of contrarianism to do or become uncommon</p>
      <p className='mb-4'>Let the evidence speak for itself. Keep an open mind, question everything and be ready for new discoveries that will change our understanding of the world.</p>
      <h3 className='my-5 text-xl font-bold font-gochi'>Don't believe anyone... not even <span className='line-through '>yourself</span> me</h3>
      <Image src="/assets/about.png" alt="About" width={680} height={444} className="my-10"
      />
      <h2 className='mt-5 mb-2 text-xl font-bold font-gochi'>Who am I?</h2>
      <p className='mb-4'>I'm <a className='underline font-gochi font-2xl' href='https://enrique.zone'>Enrique Iturriaga</a> and I'm probably the opposite of what I think I am... read the blog and make your own conclussions. </p>
      <p className='mb-4'>This is my online space for... pretty much anything. There's no agenda behind this site other than writing/Uploading whatever I want.</p>
      <p className='mb-4'>That's why I named this site "Nullius in verba", because you shouldn't take my word (or anyone's word) for anything. Life is <span className='line-through'>fucking</span> amazing if you are willing to experience it yourself. Find your own way.</p>
      <div className='mt-10'>

        <SubscribeForm />
      </div>
    </div>
  )
}

export default AboutComp