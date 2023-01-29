import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

function Headertest() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <div>
      <nav className="bg-rose-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-[30vw] lg:space-x-[40vw]">
              <div className="flex-shrink-0">
                <h1 className="text-xl text-white/80">Next Meetups</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link
                    href="/"
                    className=" hover:bg-rose-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    All Meetups
                  </Link>

                  <Link
                    href="/addMeetup"
                    className="text-gray-300 hover:bg-rose-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Add New Meetup
                  </Link>

                  {session ? (
                    <div className="flex items-center space-x-4">
                      <img
                        src={session.user?.image!}
                        className="h-8 w-8 rounded-full"
                      />

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
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-indigo-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 sm:px-3 flex flex-col space-y-2">
                <Link
                  href="/"
                  className=" hover:bg-rose-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  All Meetups
                </Link>

                <Link
                  href="/addMeetup"
                  className="text-gray-300 hover:bg-rose-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Add New Meetup
                </Link>

                {session ? (
                  <div className="flex items-center space-x-4 px-3">
                    <img
                      src={session.user?.image!}
                      className="h-8 w-8 rounded-full"
                    />

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
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Headertest;
