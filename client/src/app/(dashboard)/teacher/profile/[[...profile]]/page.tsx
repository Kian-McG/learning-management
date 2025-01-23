import Header from '@/components/Header'
import { UserProfile } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const UserProfilePage = () => {
  return (
    <>
    <Header title="Profile" subtitle="Your profile information" />
    <UserProfile 
    path='/teacher/profile'
    routing='path'
    appearance={{
        baseTheme: dark,
        elements: {
            scrollBox: 'bg-customgreys-darkGrey',
            navbar: {
                "& >div:nth-child(1)": {
                    background: 'none',
                }
            },
            rootBox: 'flex justify-center items-center py-5',
            cardBox: 'shadow-none',
            card: 'bg-customgreys-secondarybg w-full shadow-none',
            footer: {
                background: '#25262F',
                padding: '0.2rem',
                '& >div >div:nth-child(1)': {
                    background: '#25262F',
                },
            },
            formFieldLabel: 'text-white-50 font-normal',
            formButtonPrimary: 'bg-primary-700 text-white-100 hover:bg-primary-600 !shadow-none',
            formFieldInput: 'bg-customgreys-primarybg text-white-50 !shadow-none',
            footerActionLink: 'text-primary-750 hover:text-primary-600',
        },
    }}
    />
    </>
  )
}

export default UserProfilePage