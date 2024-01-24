'use client';
import React, { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <Popover className="container mx-auto flex item-center border-b-2 px-6 py-2 h-24">
      <h1 className="font-bold">Event Create</h1>
      <div className="grow">
        <div
          className=" hidden sm:flex items-center justify-center gap-2
        md:gap-8"
        >
          <Link href={'home'}>Home</Link>
          <Link href={'blog'}>Find Event</Link>
          <Link href={'about'}>About</Link>
          <Link href={'contact'}>Contact</Link>
        </div>
      </div>

      <div className="flex grow item-center justify-center sm:hidden">
        <Popover.Button className="inline-flex item-center ml-10 justify-center rounded-md bg-white p-2 text-gray-400 hoover:bg-gray-100 hoover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focuse:ring-infigo-500">
          <span className="sr-only">Open Menu</span>
          <Bars3Icon className="h-6 w-6" arial-hidden="true"></Bars3Icon>
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 sclae-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex item-center justify-between">
                <h1 className="font-bold">Event Create</h1>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hoover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close Menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-2">
                <nav className="grid gap-y-8">
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href={'/'}
                  >
                    Home
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="blog"
                  >
                    Find Event
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="about"
                  >
                    About
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="contact"
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              <div className="mt-6 flex flex-col item-center gap-2">
                <Link
                  href="register"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                >
                  Sign up
                </Link>
                <Link
                  href="login"
                  className="rounded-md bg-gray-500 px-4 py-2 text-sm font-medium md:text-xl w-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>

      <div className="hidden sm:block">
        <Link href={'register'} className="mr-2 font-bold">
          Sign up
        </Link>
        <p className="flex">|</p>
        <Link href={'login'} className="font-bold">
          Login
        </Link>
      </div>
    </Popover>
  );
};

export default Navbar;
