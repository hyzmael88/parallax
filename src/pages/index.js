import { useParallax } from 'react-scroll-parallax'
import React, { useRef } from 'react'
import Image from 'next/image'

export default function Index() {

  const target = useRef(null)
  const train = useParallax({
    speed:500,
    targetElement:target.current,
  }
  )

  const cloud = useParallax({
    speed: 200, 
    targetElement: target.current,
  })



  return (
    <div>

    <div ref={target} style={
      {
        background: "url('/Scene.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '3000px',
        
      }
    }
    className='h-screen'
    >

      <div className='fixed top-10 left-40'>
        <Image src="/Sun.png"
          height={120}
          width={120}
          alt='sun'
          />
      </div>
      <div ref={train.ref} className='absolute'
        style={{
          top:'11vh',
          left:'30vw',
        }}
        >
        <Image src="/Train.png" height={350} width={700} alt='train'/>

      </div>
      <div ref={cloud.ref} className='absolute top-10'>
        <Image src='/Cloud.png' height={200} width={1000} alt='cloud'/>
      </div>
       

    </div>
     
        </div>
  )
}
