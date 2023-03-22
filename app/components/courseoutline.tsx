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
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

import { Card } from './subcourseoutine'
import CourseCore from './subcourseoutine'

export default function CourseOutline() {
    return (
        <Container py={5} maxW={'container.lg'}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Short heading
                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                    obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
                </Text>
            </Stack>
            <CourseCore />
            <Stack py="4" spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Short heading
                </Heading>

                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                    obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
                </Text>

            </Stack>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={6}>
                <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading  as={'h2'}>Medium Length Title</Heading>
                    <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                    obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
                </Text>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Heading'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                            }
                            href={'#'}
                        />
                    </Flex>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Card
                            heading={'Heading'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                            }
                            href={'#'}
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
                gap={6}>
                <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading as={'h2'}>Medium Length Title</Heading>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>
                            20%
                        </Text>
                        <Box fontSize={'sm'}>
                            Description for the number. People always pay attention to
                            numbers.
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>
                            20%
                        </Text>
                        <Box fontSize={'sm'}>
                            Description for the number. People always pay attention to
                            numbers.
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={6}>
                <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading as={'h2'}>Medium Length Title</Heading>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>
                            20%
                        </Text>
                        <Box fontSize={'sm'}>
                            Description for the number. People always pay attention to
                            numbers.
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>
                            20%
                        </Text>
                        <Box fontSize={'sm'}>
                            Description for the number. People always pay attention to
                            numbers.
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={6}>
                <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading as={'h2'}>Medium Length Title</Heading>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>
                            20%
                        </Text>
                        <Box fontSize={'sm'}>
                            Description for the number. People always pay attention to
                            numbers.
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>
                            20%
                        </Text>
                        <Box fontSize={'sm'}>
                            Description for the number. People always pay attention to
                            numbers.
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={6}>
                <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading as={'h2'}>Medium Length Title</Heading>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>
                            20%
                        </Text>
                        <Box fontSize={'sm'}>
                            Description for the number. People always pay attention to
                            numbers.
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem w="100%">
                    <Flex flexDirection={'column'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>
                            20%
                        </Text>
                        <Box fontSize={'sm'}>
                            Description for the number. People always pay attention to
                            numbers.
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Container>
    );
}
