import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all';

function Hero() {
    useGSAP(()=>{
        const heroSplit=new SplitText('.title',{type:'chars,words'});//Animate by each letter

        const paragraphSplit=new SplitText('.subtitle',{type:'lines'});//animate Line by line
        heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars,{
            yPercent:100,
            duration:1.8,
            ease: 'expo.out',
            stagger:0.05
        });

        gsap.from(paragraphSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.05,
            delay:1,//The one sec delay makes the animation really smooth visually fantastic
        });

        gsap.timeline({ //top cookie moves up when scrolling and the bottom leaf moves down 
            scrollTrigger:{
                trigger:'#hero',
                start: 'top top',
                end:'bottom top',
                scrub:true,
            }
        })
        .to('.right-leaf',{y:200},0)
        .to('.left-leaf',{y:-200},0)
    
    }, []); //Empty array so it'll run only in the start
  return (
    <>
    <section id='hero' className='noisy'>
        <h1 className='title'>Cookie Love</h1>
        <img
         src="/images/hero-left-leaf.png" 
         alt="lefthero" 
         className='left-leaf' 
         />
         <img
         src="/images/hero-right-leaf.png" 
         alt="righthero" 
         className='right-leaf' 
         />

         <div className='body'>
            <div className='content'>
                <div className='space-y-5 hidden md:block'>
                    <p>Cool, Classy, Crispy</p>
                    <p className="subtitle">Life is sweet<br />take a bite</p>
                </div>
                <div className='view-cakes'>
                    <p className='subtitle'>
                        Every creation in our bakery is crafted with premium ingredients, artful passion, and time-honored recipes — designed to sweeten life’s moments.
                    </p>
                    <a href="#cakes">View Cakes</a>
                </div>

            </div>
         </div>
    </section>
    </>
  )
}

export default Hero
