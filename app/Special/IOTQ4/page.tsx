/* eslint-disable react/no-unescaped-entities */
'use client'

import { Box, Icon, Image, Text, chakra, useColorModeValue } from '@chakra-ui/react'

import Header from '../../components/nav'
import MultiTierList from '../../components/multilevellist'
import TopFooter from '../../components/footer'

const data = [
    {
        label:"Alexa Skill Developement",
        secondlist:[
            {
                label:"",
                link: "https://developer.amazon.com/en-US/alexa",
                linklabel: "https://developer.amazon.com/en-US/alexa"
            }
        ]
    },
    {
        label:"Alexa with Matter Protocol",
        secondlist:[
            {
                label:"",
                link: "https://developer.amazon.com/en-US/alexa/matter",
                linklabel: "https://developer.amazon.com/en-US/alexa/matter"
            },
            {
                label:"",
                link: "https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html",
                linklabel: "https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html"
            }
        ]
    },





];


export default function Q1() {
    return (
        <>
            <Header />
            <HeroCourse />
            <MultiTierList data={data} />
            <TopFooter />
        </>
    )
}


const HeroCourse = () => {
    const bg = useColorModeValue("white", "gray.800");
    return (
        <Box pos="relative" overflow="hidden" bg={bg} mt={10}>
            <Box maxW="7xl" mx="auto">
                <Box
                    pos="relative"
                    pb={{
                        base: 8,
                        sm: 16,
                        md: 20,
                        lg: 28,
                        xl: 32,
                    }}
                    maxW={{
                        lg: "2xl",
                    }}
                    w={{
                        lg: "full",
                    }}
                    zIndex={1}
                    bg={bg}
                    border="solid 1px transparent"
                >
                    <Icon
                        display={{
                            base: "none",
                            lg: "block",
                        }}
                        position="absolute"
                        right={0}
                        top={0}
                        bottom={0}
                        h="full"
                        w={48}
                        color={bg}
                        transform="translateX(50%)"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </Icon>
                    <Box
                        mx="auto"
                        maxW={{
                            base: "7xl",
                        }}
                        px={{
                            base: 4,
                            sm: 6,
                            lg: 8,
                        }}
                        mt={{
                            base: 10,
                            sm: 12,
                            md: 16,
                            lg: 20,
                            xl: 28,
                        }}
                    >
                        <Box
                            w="full"
                            textAlign={{
                                sm: "center",
                                lg: "left",
                            }}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <chakra.h1
                                fontSize={{
                                    base: "2xl",
                                    sm: "3xl",
                                    md: "4xl",
                                }}
                                letterSpacing="tight"
                                lineHeight="short"
                                fontWeight="extrabold"
                                color="gray.900"
                                _dark={{
                                    color: "white",
                                }}
                            >
                                <chakra.span
                                    display={{
                                        base: "block",
                                        xl: "inline",
                                    }}
                                >
                                    AC-351: Ambient Computing with Voice Assistants and Matter Devices{" "}
                                </chakra.span>

                            </chakra.h1>
                            <chakra.p
                                mt={{
                                    base: 3,
                                    sm: 5,
                                    md: 5,
                                }}
                                fontSize={{
                                    sm: "md",
                                    md: "lg",
                                }}
                                maxW={{
                                    sm: "xl",
                                }}
                                mx={{
                                    sm: "auto",
                                    lg: 0,
                                }}
                                color="gray.500"

                            >
                                Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more.

                </chakra.p>

                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                position={{
                    lg: "absolute",
                }}
                top={{
                    lg: 0,
                }}
                bottom={{
                    lg: 0,
                }}
                right={{
                    lg: 0,
                }}
                w={{
                    lg: "50%",
                }}
                border="solid 1px transparent"
            >
                <Image
                    h={[56, 72, 96, "full"]}
                    w="full"
                    fit="cover"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt=""
                    loading="lazy"
                />
            </Box>
        </Box>
    );
};
