'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Login() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form className='bg-green border-fontc rounded-lg border-2 p-10 text-fontc space-y-10 h-auto w-96 shadow-lg'>
        <div className='flex items-center w-full'>
          <Link href="/" className='block w-full text-center'>
            <Image
              src="/helloibe-logo.svg"
              alt="helloibe.me logo"
              width={180}
              height={20}
              priority
              className='mx-auto'
            />
          </Link>
        </div>
        <div className='space-y-3'>
          <div className='flex flex-col'>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id='username'
              name="username"
              autoComplete='guest'
              placeholder='Enter your username'
              className='border rounded border-fontc p-1 bg-green'
              required
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id='password'
              name="password"
              autoComplete='guest'
              placeholder='Enter your password'
              className='border rounded border-fontc p-1 bg-green'
              required
            />
          </div>
        </div>

        <div className='text-center p-1 px-3 border rounded-sm border-fontc hover:bg-fontc hover:text-green'>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}
