import React from 'react';
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between item-center w-full mb-10 pt-3 '>
        <img src={logo} alt="sumz_log" className='w-28 object-contain'/>
        <button type='button'
        onClick={()=> window.open('https://github.com/thiru49/AI_SUMMARIZER')} className='black_btn'>
            GitHub
        </button>
      </nav>
      <h1 className='head_text'> 
          Summarize Articles with <br className='max-md:hidden'/>
          <span className='orange_gradient'>OpenAI GPT_4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with summarize,an open-source article summarizer that trasforms lenghthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero