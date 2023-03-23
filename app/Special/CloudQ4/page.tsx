/* eslint-disable react/no-unescaped-entities */
'use client'

import { Box, Icon, Image, Text, chakra, useColorModeValue } from '@chakra-ui/react'

import Header from '../../components/nav'
import MultiTierList from '../../components/multilevellist'
import TopFooter from '../../components/footer'

const data = [
    {
        label: "1) Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
        link: "https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3",
        linklabel: "(View Website)"
    },
    {
        label: "2) Cloud Development Kit for Kubernetes",
        link: "https://cdk8s.io/",
        linklabel: "(View Website)"
    },




];


export default function Q1() {
    return (
        <>
                <Header />

            <Box bg={useColorModeValue('#f3f4f4', 'gray.700')}>
                <HeroCourse />
                <MultiTierList data={data} />
                <TopFooter />
            </Box>
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
                                    CN-351: Certified Kubernetes Application Developer (CKAD){" "}
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
                                Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.
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
