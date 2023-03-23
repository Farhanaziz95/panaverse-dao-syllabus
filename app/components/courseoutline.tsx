'use client'

import {
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

import { Card } from './subcourseoutine'
import CourseCore from './subcourseoutine'

export default function CourseOutline() {
    return (
        <Container bg={useColorModeValue('#f3f4f4','gray.700')} py={5} maxW={'container.lg'}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading color={useColorModeValue('black','white')} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Core Courses (Common in All Specializations):

                </Heading>
                <Text color={useColorModeValue('black','white')} fontSize={{ base: 'sm', sm: 'lg' }}>
                Every participant of the program will start by completing the following three core courses:
                </Text>
            </Stack>
            <CourseCore />
            <Stack py="4" spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading color={useColorModeValue('black','white')} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                Specialized Tracks:
                </Heading>

                <Text color={useColorModeValue('black','white')} fontSize={{ base: 'sm', sm: 'lg' }}>
                After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
                </Text>

            </Stack>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={6}
                pb="6">
                <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading color={useColorModeValue('black','white')} as={'h2'}>Web 3.0 (Blockchain) and Metaverse</Heading>
                    <Text color={useColorModeValue('black','white')} fontSize={{ base: 'sm', sm: 'lg' }}>
                    This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences
                    </Text>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter IV'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Smart Contracts and Planet-Scale Web 3.0 Dapps.'
                            }
                            href={'/Special/Web3Q4'}
                        />
                    </Flex>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter V'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Planet-Scale Open VR & AR Metaverse Experiences.'
                            }
                            href={'/Special/Web3Q5'}
                        />
                    </Flex>
                </GridItem>
            </Grid>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={6}
                pb="6">
                <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading color={useColorModeValue('black','white')} as={'h2'}>Artificial Intelligence (AI) and Deep Learning</Heading>
                    <Text color={useColorModeValue('black','white')} fontSize={{ base: 'sm', sm: 'lg' }}>
                    The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
                    </Text>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter IV'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Planet-Scale Intelligent APIs and Python Programming.'
                            }
                            href={'/Special/AIQ4'}
                        />
                    </Flex>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter V'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Deep Learning and MLOps.'
                            }
                            href={'/Special/AIQ5'}
                        />
                    </Flex>
                </GridItem>
            </Grid>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={6}
                pb="6">
                <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading color={useColorModeValue('black','white')} as={'h2'}>Cloud-Native Computing</Heading>
                    <Text color={useColorModeValue('black','white')} fontSize={{ base: 'sm', sm: 'lg' }}>
                    The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
                    </Text>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter IV'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Kubernetes Application Developer (CKAD).'
                            }
                            href={'/Special/CloudQ4'}
                        />
                    </Flex>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter V'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Multi-Cloud APIs using CDK for Terraform.'
                            }
                            href={'/Special/CloudQ5'}
                        />
                    </Flex>
                </GridItem>
            </Grid>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={6}
                pb="6">
                <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading color={useColorModeValue('black','white')} as={'h2'}>Ambient Computing and IoT</Heading>
                    <Text color={useColorModeValue('black','white')} fontSize={{ base: 'sm', sm: 'lg' }}>
                    The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. 
                    </Text>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter IV'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Ambient Computing with VA & MPD.'
                            }
                            href={'/Special/IOTQ4'}
                        />
                    </Flex>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter V'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Embedded Programming using C and Rust.'
                            }
                            href={'/Special/IOTQ5'}
                        />
                    </Flex>
                </GridItem>
            </Grid>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={6}
                pb="6">
                <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading color={useColorModeValue('black','white')} as={'h2'}>Genomics and Bioinformatics</Heading>
                    <Text color={useColorModeValue('black','white')} fontSize={{ base: 'sm', sm: 'lg' }}>
                    Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data.
                    </Text>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter IV'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Python for Biologists.'
                            }
                            href={'/Special/GenomicsQ4'}
                        />
                    </Flex>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter V'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Python for Biologists.'
                            }
                            href={'/Special/GenomicsQ5'}
                        />
                    </Flex>
                </GridItem>
            </Grid>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={6}
                pb="6">
                <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading color={useColorModeValue('black','white')} as={'h2'}>Network Programmability and Automation</Heading>
                    <Text color={useColorModeValue('black','white')} fontSize={{ base: 'sm', sm: 'lg' }}>
                    Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.
                    </Text>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter IV'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'CCNA 200-301 Certification.'
                            }
                            href={'/Special/NetworkQ4'}
                        />
                    </Flex>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Quarter V'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Network Programmability and Automation.'
                            }
                            href={'/Special/NetworkQ5'}
                        />
                    </Flex>
                </GridItem>
            </Grid>
        </Container>
    );
}
