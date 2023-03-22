'use client'

import FactStatistics  from '../components/factstudent'
import Header from '../components/nav'
import TestimonialStudent from '../components/testimonialstudent'
import TopAbout from '../components/detailsleftabout'
import TopFooter from '../components/footer'

export default function About() {
    return (
        <>
            <Header />
            <TopAbout/>
            <FactStatistics/>
            <TestimonialStudent />
            <TopFooter />
        </>
    )
}
