/* eslint-disable react/no-unescaped-entities */
'use client'

import {
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    chakra
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

export default function ArticalList() {
    return (
        <Container
            bg="#edf3f8"
            _dark={{
                bg: "#3e3e3e",
            }} py={5} pt={28} maxW={'100%'}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                Top High-Paying Jobs in the Metaverse Industry

                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                Explore the top high-paying jobs in the emerging metaverse industry, including blockchain developers, web3 developers, NFT specialists, game developers, and virtual architects. Discover the required skills, salaries, and scope of these careers in the evolving metaverse industry.
                </Text>
            </Stack>


            <Flex
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                py={8}
                px={50} 
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    mx="auto"
                    px={8}
                    py={4}
                    rounded="lg"
                    shadow="lg"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    maxW="2xl"
                >
                    <Flex justifyContent="space-between" alignItems="center">
                        <chakra.span
                            fontSize="sm"
                            color="gray.600"
                            _dark={{
                                color: "gray.400",
                            }}
                        >
                            Nov 10, 2021
                        </chakra.span>
                        <Link
                            px={3}
                            py={1}
                            bg="gray.600"
                            color="gray.100"
                            fontSize="sm"
                            fontWeight="700"
                            rounded="md"
                            _hover={{
                                bg: "gray.500",
                            }}
                        >
                            Hiring
                        </Link>
                    </Flex>

                    <Box mt={2}>
                        <Link
                            fontSize="2xl"
                            color="gray.700"
                            _dark={{
                                color: "white",
                            }}
                            fontWeight="700"
                            _hover={{
                                color: "gray.600",
                                _dark: {
                                    color: "gray.200",
                                },
                                textDecor: "underline",
                            }}
                        >
                            Top 5 'Metaverse' jobs that will rule the future of tech industry
                        </Link>
                        <chakra.p
                            mt={2}
                            color="gray.600"
                            _dark={{
                                color: "gray.300",
                            }}
                        >
                            The term "metaverse" is the latest buzzword to capture the tech industry's imagination - so much so that one of the internet giants are rebranding to signal their embrace of the futuristic idea.

Facebook on October 28 announced that it has changed its company name to Meta.
                        </chakra.p>
                    </Box>

                    <Flex justifyContent="space-between" alignItems="center" mt={4}>
                        <Link
                            color="brand.600"
                            _dark={{
                                color: "brand.400",
                            }}
                            _hover={{
                                textDecor: "underline",
                            }}
                            href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
                        >
                            Read more
                        </Link>

                        <Flex alignItems="center">
                            <Image
                                mx={4}
                                w={10}
                                h={10}
                                rounded="full"
                                fit="cover"
                                display={{
                                    base: "none",
                                    sm: "block",
                                }}
                                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                                alt="avatar"
                            />
                            <Link
                                color="gray.700"
                                _dark={{
                                    color: "gray.200",
                                }}
                                fontWeight="700"
                                cursor="pointer"
                            >
                                ISHIKA YADAV
                            </Link>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>;

            <Flex
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                pb={4}
                px={50} 
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    mx="auto"
                    px={8}
                    py={4}
                    rounded="lg"
                    shadow="lg"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    maxW="2xl"
                >
                    <Flex justifyContent="space-between" alignItems="center">
                        <chakra.span
                            fontSize="sm"
                            color="gray.600"
                            _dark={{
                                color: "gray.400",
                            }}
                        >
                            Mar, 2023
                        </chakra.span>
                        <Link
                            px={3}
                            py={1}
                            bg="gray.600"
                            color="gray.100"
                            fontSize="sm"
                            fontWeight="700"
                            rounded="md"
                            _hover={{
                                bg: "gray.500",
                            }}
                        >
                            Block Chain
                        </Link>
                    </Flex>

                    <Box mt={2}>
                        <Link
                            fontSize="2xl"
                            color="gray.700"
                            _dark={{
                                color: "white",
                            }}
                            fontWeight="700"
                            _hover={{
                                color: "gray.600",
                                _dark: {
                                    color: "gray.200",
                                },
                                textDecor: "underline",
                            }}
                        >
                            Blockchain Developer Salary - Jun 2022
                        </Link>
                        <chakra.p
                            mt={2}
                            color="gray.600"
                            _dark={{
                                color: "gray.300",
                            }}
                        >
                            The average yearly salary of a Blockchain Developer in Web3 is $90k per year, with a minimum base salary of $36k and a maximum of $225k
                        </chakra.p>
                    </Box>

                    <Flex justifyContent="space-between" alignItems="center" mt={4}>
                        <Link
                            color="brand.600"
                            _dark={{
                                color: "brand.400",
                            }}
                            _hover={{
                                textDecor: "underline",
                            }}
                            href="https://web3.career/web3-salaries/blockchain-developer"
                        >
                            Read more
                        </Link>

                        <Flex alignItems="center">
                            <Image
                                mx={4}
                                w={10}
                                h={10}
                                rounded="full"
                                fit="cover"
                                display={{
                                    base: "none",
                                    sm: "block",
                                }}
                                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                                alt="avatar"
                            />
                            <Link
                                color="gray.700"
                                _dark={{
                                    color: "gray.200",
                                }}
                                fontWeight="700"
                                cursor="pointer"
                            >
                                Web 3
                            </Link>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>;

            <Flex
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                pb={4}
                px={50} 
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    mx="auto"
                    px={8}
                    py={4}
                    rounded="lg"
                    shadow="lg"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    maxW="2xl"
                >
                    <Flex justifyContent="space-between" alignItems="center">
                        <chakra.span
                            fontSize="sm"
                            color="gray.600"
                            _dark={{
                                color: "gray.400",
                            }}
                        >
                            Mar 22, 2022
                        </chakra.span>
                        <Link
                            px={3}
                            py={1}
                            bg="gray.600"
                            color="gray.100"
                            fontSize="sm"
                            fontWeight="700"
                            rounded="md"
                            _hover={{
                                bg: "gray.500",
                            }}
                        >
                            Web 3.0
                        </Link>
                    </Flex>

                    <Box mt={2}>
                        <Link
                            fontSize="2xl"
                            color="gray.700"
                            _dark={{
                                color: "white",
                            }}
                            fontWeight="700"
                            _hover={{
                                color: "gray.600",
                                _dark: {
                                    color: "gray.200",
                                },
                                textDecor: "underline",
                            }}
                        >
                            Web3 Salaries Soar to $750,000 for Rank-and-File Devs 
                        </Link>
                        <chakra.p
                            mt={2}
                            color="gray.600"
                            _dark={{
                                color: "gray.300",
                            }}
                        >
                            Web2 giants like Google and Facebook have long been beacons for talent seeking cushy paydays, and for good reason — senior software engineers at all five FAANG companies make well over $300,000 a year, according to levels.fyi. 
                        </chakra.p>
                    </Box>

                    <Flex justifyContent="space-between" alignItems="center" mt={4}>
                        <Link
                            color="brand.600"
                            _dark={{
                                color: "brand.400",
                            }}
                            _hover={{
                                textDecor: "underline",
                            }}
                            href="https://thedefiant.io/web3-soaring-salaries"
                        >
                            Read more
                        </Link>

                        <Flex alignItems="center">
                            <Image
                                mx={4}
                                w={10}
                                h={10}
                                rounded="full"
                                fit="cover"
                                display={{
                                    base: "none",
                                    sm: "block",
                                }}
                                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                                alt="avatar"
                            />
                            <Link
                                color="gray.700"
                                _dark={{
                                    color: "gray.200",
                                }}
                                fontWeight="700"
                                cursor="pointer"
                            >
                                Owen Fernau
                            </Link>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>;

            <Flex
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                pb={4}
                px={50} 
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    mx="auto"
                    px={8}
                    py={4}
                    rounded="lg"
                    shadow="lg"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    maxW="2xl"
                >
                    <Flex justifyContent="space-between" alignItems="center">
                        <chakra.span
                            fontSize="sm"
                            color="gray.600"
                            _dark={{
                                color: "gray.400",
                            }}
                        >
                            Jun 28, 2022
                        </chakra.span>
                        <Link
                            px={3}
                            py={1}
                            bg="gray.600"
                            color="gray.100"
                            fontSize="sm"
                            fontWeight="700"
                            rounded="md"
                            _hover={{
                                bg: "gray.500",
                            }}
                        >
                            Web 3.0
                        </Link>
                    </Flex>

                    <Box mt={2}>
                        <Link
                            fontSize="2xl"
                            color="gray.700"
                            _dark={{
                                color: "white",
                            }}
                            fontWeight="700"
                            _hover={{
                                color: "gray.600",
                                _dark: {
                                    color: "gray.200",
                                },
                                textDecor: "underline",
                            }}
                        >
                            The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters | Newzoo Trend Report
                        </Link>
                        <chakra.p
                            mt={2}
                            color="gray.600"
                            _dark={{
                                color: "gray.300",
                            }}
                        >
                            Halfway through 2022, hype around the metaverse has continued. The metaverse, NFTs, and blockchain gaming have transitioned from being largely unknown concepts to terms on the lips of every major brand or investor.
                        </chakra.p>
                    </Box>

                    <Flex justifyContent="space-between" alignItems="center" mt={4}>
                        <Link
                            color="brand.600"
                            _dark={{
                                color: "brand.400",
                            }}
                            _hover={{
                                textDecor: "underline",
                            }}
                            href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022"
                        >
                            Read more
                        </Link>

                        <Flex alignItems="center">
                            <Image
                                mx={4}
                                w={10}
                                h={10}
                                rounded="full"
                                fit="cover"
                                display={{
                                    base: "none",
                                    sm: "block",
                                }}
                                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                                alt="avatar"
                            />
                            <Link
                                color="gray.700"
                                _dark={{
                                    color: "gray.200",
                                }}
                                fontWeight="700"
                                cursor="pointer"
                            >
                                New Zoo
                            </Link>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>;

            <Flex
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                pb={4}
                px={50} 
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    mx="auto"
                    px={8}
                    py={4}
                    rounded="lg"
                    shadow="lg"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    maxW="2xl"
                >
                    <Flex justifyContent="space-between" alignItems="center">
                        <chakra.span
                            fontSize="sm"
                            color="gray.600"
                            _dark={{
                                color: "gray.400",
                            }}
                        >
                            Jan 16, 2023
                        </chakra.span>
                        <Link
                            px={3}
                            py={1}
                            bg="gray.600"
                            color="gray.100"
                            fontSize="sm"
                            fontWeight="700"
                            rounded="md"
                            _hover={{
                                bg: "gray.500",
                            }}
                        >
                            Metaverse
                        </Link>
                    </Flex>

                    <Box mt={2}>
                        <Link
                            fontSize="2xl"
                            color="gray.700"
                            _dark={{
                                color: "white",
                            }}
                            fontWeight="700"
                            _hover={{
                                color: "gray.600",
                                _dark: {
                                    color: "gray.200",
                                },
                                textDecor: "underline",
                            }}
                        >
                            How To Become Metaverse Developer: Scope, Skills, And Salary
                        </Link>
                        <chakra.p
                            mt={2}
                            color="gray.600"
                            _dark={{
                                color: "gray.300",
                            }}
                        >
                            When it comes to the world of technology news, one topic has dominated the conversation: the Metaverse. It got highlighted after Facebook renamed itself to Meta and announced the launch of Metaverse in the coming days. As per them, Metaverse will be a digital representation of the physical universe where everything can be done digitally.
                        </chakra.p>
                    </Box>

                    <Flex justifyContent="space-between" alignItems="center" mt={4}>
                        <Link
                            color="brand.600"
                            _dark={{
                                color: "brand.400",
                            }}
                            _hover={{
                                textDecor: "underline",
                            }}
                            href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/"
                        >
                            Read more
                        </Link>

                        <Flex alignItems="center">
                            <Image
                                mx={4}
                                w={10}
                                h={10}
                                rounded="full"
                                fit="cover"
                                display={{
                                    base: "none",
                                    sm: "block",
                                }}
                                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                                alt="avatar"
                            />
                            <Link
                                color="gray.700"
                                _dark={{
                                    color: "gray.200",
                                }}
                                fontWeight="700"
                                cursor="pointer"
                            >
                                Ayushi Abrol
                            </Link>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>;
        </Container>



    );
}
