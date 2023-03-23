/* eslint-disable react/no-unescaped-entities */
'use client'

import { Box, Icon, Image, Text, chakra, useColorModeValue } from '@chakra-ui/react'

import Header from '../../components/nav'
import MultiTierList from '../../components/multilevellist'
import TopFooter from '../../components/footer'

const data = [
    {
        label: "1) Open Metaverse Web Development",
        secondlist: [
            {
                label: "Open Metaverse Learning Repo",
                link: "https://github.com/panaverse/metaverse-web",
                linklabel: "(View GitHub)"
            },

        ],
    },
    {
        label: "2) Blender 3D asset Creation for the Metaverse (Remote Zoom Class)",
        secondlist: [
            {
                label: "Blender 3.3+ Download",
                link: "https://www.blender.org/download/",
                linklabel: "(Click Here)"
            },
            {
                label: "Blender 3.0 Beginner Tutorial",
                link: "https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD",
                linklabel: "(Watch Here)"
            },
            {
                label: "Blender 3.0 Hotkey",
                link: "https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit",
                linklabel: "(View Document)"
            },
            {
                label: "Blender Projects Textbook: Blender by Example 2nd Edition ",
                link: "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561",
                linklabel: "(Visit Website)"
            },
            {
                label: "Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain ",
                link: "https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5",
                linklabel: "(Visit Website)"
            },
            {
                label: "Best Hardware Performance for Blender Rendering",
                link: "https://www.youtube.com/watch?v=H7T0SzdFHwg",
                linklabel: "(Watch Here)"
            },
            {
                label: "Assignment 1:",
                link: "https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD",
                linklabel: "(Watch Here)",
                description: "Build a 3D Donut using Blender 3 as shown in these video tutorials"
            },
            {
                label: "Assignment 2:",
                link: "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561",
                linklabel: "(Visit Website)",
                description: "Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book [Blender by Example 2nd Edition] "
            },
            {
                label: "Assignment 3:",
                link: "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561",
                linklabel: "(Visit Website)",
                description: "Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition"
            },
            {
                label: "Assignment 4:",
                link: "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561",
                linklabel: "(Visit Website)",
                description: "Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition"
            },
            {
                label: "Assignment 5:",
                link: "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561",
                linklabel: "(Visit Website)",
                description: "Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition"
            },
            {
                label: "Assignment 6:",
                link: "https://www.youtube.com/watch?v=bpvh-9H8S1g",
                linklabel: "(Watch Here)",
                description: "Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials "
            },

        ],
        description: "Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse."

    },




];


export default function Q1() {
    return (
        <>
            <Box bg={useColorModeValue('#f3f4f4', 'gray.700')}>
                <Header />
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
                                    MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences{" "}
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
                                The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.
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
