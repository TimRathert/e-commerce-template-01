import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Announcements from '../components/Announcements'
import NavBar from '../components/NavBar'
import MainSlideShow from '../components/MainSlideShow'

export default function Home() {
  const [ navOpen, setNavOpen ] = useState(false)
  return (
    <>
    <Announcements />
    <NavBar navOpen = {navOpen} setNavOpen = {setNavOpen} />
    <MainSlideShow navOpen = {navOpen}/>
    <div>
      <p className='text-center m-20 text-2xl'>Site Description for SEO</p> 
    </div>
    <div>
      category cards
      <div>cat 1</div>
      <div>cat 2</div>
      <div>cat 3</div>
      <div>cat 4</div>
    </div>
    <div>update</div>
    <div>
      wide category cards
      <div>cat 1</div>
      <div>cat 2</div>
      <div>cat 3</div>
      <div>cat 4</div>
    </div>
    <div>About (brief)</div>
    <div>
      Footer
      <div>Quick Links</div>
      <div>About Us</div>
      <div>subscribe / socials</div>
    </div>
    <div> static discount / contact </div>
    </>
  )
}
