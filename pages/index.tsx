import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Announcements from '../components/Announcements'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
    <Announcements />
    <NavBar />
    <div>slideshow</div>
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
