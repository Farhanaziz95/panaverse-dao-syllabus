'use client'

import {Box, useColorModeValue} from '@chakra-ui/react'

import FactStatistics from '../components/factstudent'
import Header from '../components/nav'
import TestimonialStudent from '../components/testimonialstudent'
import TopAbout from '../components/detailsleftabout'
import TopFooter from '../components/footer'

export default function About() {
    return (
        <>
            <Box bg={useColorModeValue('#f3f4f4', 'gray.700')}>
                <Header />
                <TopAbout />
                <FactStatistics />
                <TestimonialStudent />
                <TopFooter />
            </Box>
        </>
    )
}
