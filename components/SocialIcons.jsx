import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

export default function SocialIcons() {
  return (
    <div className='absolute right-0 top-[20%] md:top-2/6 flex flex-row md:flex-col gap-5 w-full md:w-fit justify-between'>
        <a href="https://www.linkedin.com/in/muhammad-zohaib-180471334/" target='_blank' title='LinkedIn Profile'>
            <Linkedin className='hover:text-[#31F900] w-8 md:w-6 h-8 md:h-6 text-white' />
        </a>
        <a href="https://github.com/Muhammad-Zohaib-42" target='_blank' title='Github Profile'>
            <Github className='w-8 md:w-6 h-8 md:h-6 hover:text-[#31F900] text-white' />
        </a>
    </div>
  )
}