import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="border-t-gray-200 border-t w-full min-h-36 flex flex-row items-start px-16 py-10 md:px-16 xl:px-32 2xl:px-52">
        <div className="mr-auto text-sm">
          <p>&copy; Oversightly, inc.</p>
        </div>
        <div className="flex flex-row items-center justify-around w-40">
          <BsFacebook />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
    </div>
  )
}
