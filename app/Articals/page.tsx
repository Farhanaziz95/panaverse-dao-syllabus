'use client'

import ArticalList from '../components/articallist'
import Header from '../components/nav'
import { Inter } from 'next/font/google'
import TopFooter from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

  
export default function About() {
    return (
        <>
            <Header />
            <ArticalList/>
            <TopFooter />
        </>
    )
}
