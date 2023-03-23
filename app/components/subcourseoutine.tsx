'use client'

import { Box, Button, Flex, Heading, Icon, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

import { ReactElement } from 'react';

interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
  }

  
export const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}>
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Heading color={useColorModeValue('black','white')} size="md">{heading}</Heading>
                    <Text color={useColorModeValue('black','white')} mt={1} fontSize={'sm'}>
                        {description}
                    </Text>
                </Box>
                <Button as='a' href={href} variant={'link'} colorScheme={'blue'} size={'sm'}>
                    Learn more
                </Button>
            </Stack>
        </Box>
    );
};

export default function CourseCore() {
    return (
        <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Card
                    heading={'Quarter I '}
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    description={
                        'Object-Oriented Programming using TypeScript.'
                    }
                    href={'/CoreCourse/Q1'}
                />
                <Card
                    heading={'Quarter II'}
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    description={
                        'Next.js 13 and Cloud Development Kit (CDK).'
                    }
                    href={'/CoreCourse/Q2'}
                />
                <Card
                    heading={'Quarter III'}
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    description={
                        'Full-Stack Template and API Product Development.'
                    }
                    href={'/CoreCourse/Q3'}
                />
            </SimpleGrid>
        </Box>
    );
}