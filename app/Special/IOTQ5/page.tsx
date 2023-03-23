/* eslint-disable react/no-unescaped-entities */
'use client'

import { Box, Icon, Image, Text, chakra, useColorModeValue } from '@chakra-ui/react'

import Header from '../../components/nav'
import MultiTierList from '../../components/multilevellist'
import TopFooter from '../../components/footer'

const data = [
    {

        label: "1) Introduction to the Internet of Things and Embedded Systems",
        link: "https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar",
        linklabel: "(View document)",
        secondlist: [
            {
                label: "What is the Fourth Industrial Revolution? "
            },
            {
                label: "What is IoT? "
            },
            {
                label: "Embedded Systems"
            },
            {
                label: "Hardware and Software for IoT "
            },
            {
                label: "Edge and Cloud Computing "
            },
            {
                label: "The future of IoT is AI"
            },
            {
                label: "Blockchain in the Internet of Things? "
            },
            {
                label: "IoT + AI + Blockchain: The Fourth Industrial Revolution has begun"
            },
            {
                label: "How will Matter change the IoT Infrastructure and address issues"
            },
            {
                label: "Metaverse and IoT"
            }
        ],
        description: `Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3 
        Total Questions: 46, Total Time: 60 minutes 
        `

    },
    {
        label: `2) The C Reference Book: The C programming language
        Embedded Programming book: Internet of things with ESP8266
        `,
        link: 'https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing',
        linklabel: "(View Document)"
    },
    {
        label: "3) Introduction to C Part 1",
        secondlist: [
            {
                label: `C environment Setup for (Windows, Linux, and Mac OS systems)
                Chapters 1-2 of  “The C programming language”`,
                secondlist: [
                    {
                        label: "Variable names types",
                    },
                    {
                        label: "Data types and sizes",
                    },
                    {
                        label: "Constants",
                    },
                    {
                        label: "Arithmetic operations",
                    },
                    {
                        label: "Logical and relational operators",
                    },
                    {
                        label: "Type conversions.",
                    },
                    {
                        label: "Bitwise operators",
                    },
                    {
                        label: "Conditional expressions",
                    },
                ],
                description: "Programming Assignments will also be given.",
            }
        ]
    },
    {
        label: "4) C Programming Part 2",
        secondlist: [
            {
                label: `Topics 3 and 4  of  “The C programming language”`,
                secondlist: [
                    {
                        label: "Control flow statements (else if, loops, switch, break continue)",
                    },
                    {
                        label: "Function and Program structure(Returning and non-returning, scope rules, Recursion)",
                    },

                ],
                description: "Programming Assignments will also be given.",
            }
        ]
    },
    {
        label: "5) Introduction to Embedded systems Part 1",
        secondlist: [
            {
                label: `Basic Electronics and Introduction to microcontrollers
                Chapter 1 of  “Internet of things with ESP8266”`,
                secondlist: [
                    {
                        label: "Arduino IDE installation and env setup for ESP8266",
                    },
                    {
                        label: "Burning your first code on ESP8266",
                    },

                ],
                description: "Project-based Assignments will also be given. ",
            }
        ],
        description: `Mid-Term II: C Programming Quiz 1 in Week 9 
        Total Questions: 62, Total Time: 75 minutes
        `,
    },
    {
        label: "6) Introduction to Embedded systems Part 2",
        secondlist: [
            {
                label: `Chapters 2-5 of  “Internet of things with ESP8266”`,
                secondlist: [
                    {
                        label: "Connecting your hardware to wifi.",
                    },
                    {
                        label: "",
                        link: "https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/",
                        linklabel: "https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/",
                    },
                    {
                        label: "Reading data from GPIOs.",
                    },
                    {
                        label: "",
                        link: "https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number",
                        linklabel: "https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number",
                    },
                    {
                        label: "Controlling LEDs.",
                    },
                    {
                        label: "Reading data from digital sensors. ",
                    },
                    {
                        label: "",
                        link: "https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/",
                        linklabel: "https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/",
                    },
                    {
                        label: "Cloud data logging.",
                    },
                    {
                        label: "",
                        link: "https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html",
                        linklabel: "https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html",
                    },
                    {
                        label: "",
                        link: "https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform",
                        linklabel: "https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform",
                    },
                    {
                        label: "",
                        link: "https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver",
                        linklabel: "https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver",
                    },
                    {
                        label: "Displaying data on the cloud. ",
                    },
                    {
                        label: "",
                        link: "https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud",
                        linklabel: "https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud",
                    },
                    {
                        label: "Controlling controller remotely",
                    },
                    {
                        label: "",
                        link: "https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/",
                        linklabel: "https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/",
                    },
                    {
                        label: "Controlling a lamp anywhere in the world. ",
                    },
                    {
                        label: "Interacting with different web services. ",
                    },

                ],
                description: "Programming Assignments will also be given.",
            }
        ]
    },
    {
        label: `7) Embedded Programming using Rust (Extra Weeks in the Course)
        `,
        secondlist: [
            {
                link: "https://www.rust-lang.org/what/embedded",
                linklabel: "https://www.rust-lang.org/what/embedded",
                label: "",
            },
            {
                link: "https://crates.io/crates/esp8266",
                linklabel: "https://crates.io/crates/esp8266",
                label: "",
            }
        ],
    },
    {
        label: `Hardware Requirements: 
        `,
        secondlist: [
            {
                label: "Esp8266 (Node MCU)",
            },
            {
                label: "Jumper Wires",
            },
            {
                label: "Bread Board",
            },
            {
                label: "LEDs",
            },
            {
                label: "Sensors: (Dht11, ultrasonic sensor, IR sensor)",
            }

        ],
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
                                    AC-361: Embedded Programming using C and Rust{" "}
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
                                This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.
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
