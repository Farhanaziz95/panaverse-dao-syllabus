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
                    <Heading size="md">{heading}</Heading>
                    <Text mt={1} fontSize={'sm'}>
                        {description}
                    </Text>
                </Box>
                <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
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
                    heading={'Heading'}
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    description={
                        'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                    }
                    href={'#'}
                />
                <Card
                    heading={'Heading'}
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    description={
                        'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                    }
                    href={'#'}
                />
                <Card
                    heading={'Heading'}
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    description={
                        'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                    }
                    href={'#'}
                />
            </SimpleGrid>
        </Box>
    );
}