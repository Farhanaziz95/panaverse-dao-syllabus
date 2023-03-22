import BottomFooter  from './components/footer'
import CourseOutline  from './components/courseoutline'
import Header  from './components/nav'
import Hero from './components/hero'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopFooter  from './components/footer'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <Hero/>
    <CourseOutline/>
    <TopFooter />
    </>
  )
}
