import Image from 'next/image'

function AboutComp() {
  return (
    <div className='font-roboto text-sm'>
      <h1 className="text-3xl font-bold font-gochi">About?</h1>
      <p>
        Mauris tempor, odio id ullamcorper accumsan, dui est accumsan nisl, nec sollicitudin quam libero vel mauris. Nam vel quam et nulla scelerisque eleifend. Nam commodo, libero sed iaculis lobortis, urna eros feugiat lacus, dictum dapibus dui quam eu leo. Vivamus ultrices ullamcorper nulla, eu finibus erat porttitor eu. Curabitur tempus tempor lectus, vestibulum porttitor orci congue a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis aliquet dui et diam faucibus, sit amet suscipit magna fringilla. Pellentesque mollis lacus eu egestas volutpat. Fusce ac aliquam lorem. Mauris quis auctor ante. Cras a felis dapibus, tincidunt ipsum ultricies, cursus felis. Nulla eleifend nulla turpis, eu commodo est luctus vitae. Maecenas imperdiet sollicitudin convallis. Maecenas at consectetur est, at dictum risus.
      </p>
      <h2 className='my-5 text-xl font-bold font-gochi'>Nullius in verba = Take no one’s word for it</h2>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis aliquet dui et diam faucibus, sit amet suscipit magna fringilla. Pellentesque mollis lacus eu egestas volutpat. Fusce ac aliquam lorem. Mauris quis auctor ante. Cras a felis dapibus, tincidunt ipsum ultricies, cursus felis. Nulla eleifend nulla turpis, eu commodo est luctus vitae. Maecenas imperdiet sollicitudin convallis. Maecenas at consectetur est, at dictum risus.</p>
      <Image src="/assets/about.png" alt="About" width={680} height={444} className="my-10"
      />
      <h3 className='my-5 text-xl font-bold font-gochi'>Don't believe anyone... not even <span className='line-through decoration-rose-700'>yourself</span> me</h3>
      <p>Ready to bring your web3 project to life with amazing UX design? Contact us to learn more about how we can help you create user-friendly decentralized applications that drive adoption and success. Our team of experienced UX designers has the skills and knowledge to turn your vision into a reality. Don't wait, get in touch with us today and let's make your web3 project a success!</p>

    </div>
  )
}

export default AboutComp