import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <p>&copy; 2024 Kian. All rights reserved</p>
        <div className='footer__links'>
            {[{name: 'Privacy Policy', link: '/privacy'}, {name: 'Terms of Service', link: '/terms'}, {name: 'Contact Us', link: '/contact'}].map((item) => {
                return (
                    <Link key={item.name} href={item.link} className='footer__link'>{item.name}</Link>
                )
            })}
        </div>
    </div>
  )
}

export default Footer