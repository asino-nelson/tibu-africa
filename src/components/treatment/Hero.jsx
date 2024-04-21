import { FaArrowDown } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='h-screen max-h-full flex flex-col items-center py-20'>
      <div className='bg-cyan-950 w-full h-[50vh] text-white p-10 font-bold rounded-xl grid grid-cols-2'>
        <p className='flex items-center justify-center font-bold text-6xl m-4'>Healthcere is only a call and click away!</p>
        <div className='bg-rose-500 w-full h-[90%] rounded-xl'>
          image
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-10'>
        <p>Find a treatment</p>
        < FaArrowDown/>
      </div>
    </div>
  )
}

export default Hero
