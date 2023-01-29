import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";


function Subheader() {

  const { data: session, status } = useSession();

  return (
    <div className="hidden md:flex space-x-8 items-center">
        <Link href="/">
          <h1 className="text-white/70">All Meetups</h1>
        </Link>
        <Link href="/addMeetup">
          <h1 className="text-white/70">Add New Meetup</h1>
        </Link>
        
        
        {session ? (
          <div className="flex items-center space-x-4">
            <img  src={session.user?.image!} className="h-8 w-8 rounded-full" />

          <button
            className="text-rose-500 border py-1 px-2 border-rose-500 hover:bg-rose-500 hover:text-white active:bg-rose-600 font-bold uppercase rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-center"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
          </div>
        ) : (
          <button
            className="text-rose-500 px-2 py-1 border border-rose-500 hover:bg-rose-500 hover:text-white active:bg-rose-600 font-bold uppercase rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-center"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
  )
}

export default Subheader