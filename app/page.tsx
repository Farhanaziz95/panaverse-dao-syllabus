'use client'

import {Box, useColorModeValue} from '@chakra-ui/react'

import BottomFooter  from './components/footer'
import CourseOutline  from './components/courseoutline'
import FactStatistics  from './components/factstudent'
import Header  from './components/nav'
import Hero from './components/hero'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import TestimonialStudent from './components/testimonialstudent'
import TopFooter  from './components/footer'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Box bg={useColorModeValue('#f3f4f4','gray.700')}>
    <Header />
    <Hero/>
    <FactStatistics/>
    <CourseOutline/>
    <TestimonialStudent/>
    <TopFooter />
    </Box>
    </>
  )
}
