import Header  from '../components/nav'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import TestimonialStudent from '../components/testimonialstudent'
import TopFooter  from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <TestimonialStudent/>
    <TopFooter />
    </>
  )
}
