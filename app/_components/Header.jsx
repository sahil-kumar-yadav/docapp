"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Header = () => {
  //2.54
  const { user } = useKindeBrowserClient();
  useEffect
  const Menu = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'Explore',
      path: '/'
    },
    {
      id: 3,
      name: 'Contact Us',
      path: '/'
    },
  ]
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
      <div className='flex items-center gap-10'>
        <Image src='/logo.svg' alt='logo' width={180} height={80} />
        <ul className='md:flex gap-8 hidden'>
          {
            Menu.map((item, index) => (
              <Link href={item.path}>
                <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
              </Link>
            ))
          }
        </ul>
      </div>
      {/* shadcn  button over here */}

      {
        user ?

          <Popover>
            <PopoverTrigger>
              {/* when click on image  */}
              <Image src={user?.picture} alt='profile-pic'
                width={50}
                height={50}
                className='rounded-full'
              />

            </PopoverTrigger>
            <PopoverContent className="w-44">

              {/* Place content for the popover here */}
              <ul className='flex flex-col gap-2'>
                <li className=' cursor-pointer hover:bg-slate-100 rounded-md'>Profile</li>
                <Link href={'/my-booking'} className=' cursor-pointer hover:bg-slate-100 rounded-md' >My Booking</Link>
                <li className=' cursor-pointer hover:bg-slate-100 rounded-md'>
                  <LogoutLink>
                    Logout
                  </LogoutLink>

                </li>
              </ul>

            </PopoverContent>
          </Popover>



          :
          <LoginLink>
            <Button varient="outline">Sign in</Button>
          </LoginLink>
      }

    </div>
  )
}

export default Header