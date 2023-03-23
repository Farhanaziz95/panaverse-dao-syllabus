'use client'

import { Box, Icon, Image, Text, chakra, useColorModeValue } from '@chakra-ui/react'

import Header from '../../components/nav'
import MultiTierList from '../../components/multilevellist'
import TopFooter from '../../components/footer'

const data = [
    {
        label: "1) HTML and CSS (Homework) ",
        secondlist: [
            {
                label: "Learn HTML by Hira Khan (Watch Recorded Videos)",
                link: "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6 ",
                linklabel: "Watch Here"
            },
            {
                label: "Learn CSS Intro by Hira Khan (Watch Recorded Videos)",
                link: "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob",
                linklabel: "Watch Here"
            },
        ],
    },
    {
        label: "2) Web 3.0 and Metaverse Theory",
        secondlist: [
            {
                label: "Introduction to Panaverse DAO",
                link: "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing",
                linklabel: "(View Document)"
            },
            {
                label: "Web 3.0 User Guide",
                link: "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing",
                linklabel: "(View Document)",
                description: "Complete Web 3 Assignments included in the Web 3 User Guide"
            },
            {
                label: "Virtual and Augmented  Metaverse User Guide",
                link: "https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing",
                linklabel: "(View Document)"
            },
            {
                label: "3D E-commerce",
                link: "https://emperiavr.com/",
                linklabel: "(View Document)",
                description: `First, in our Web 3 and Metaverse program, we are learning to develop Web 1, and Web 2 websites and apps. Later we will learn to develop Web 3 and 3D Commerce templates and experiences. 
\n
                But we have to start thinking right now. Let's understand what one virtual store builder company is doing the company name is Emperia. 
  
  \n              
                “Using technology, Emperia aims to make virtual worlds into the future of e-commerce, expanding the reach to new and future online shoppers, increasing brand loyalty, and creating a completely new shopping experience.”
                `,
                secondlist: [
                    {
                        label: "Emporia just got funded:",
                        link: "https://www.retail-insight-network.com/news/emperia-10m-growth/",
                        linklabel: "Visit Link"
                    },
                    {
                        label: "Checkout the Virtual Store Demos:",
                        link: "https://emperiavr.com/projects/",
                        linklabel: "Visit Link"
                    },
                ],
            },
        ],

    },
    {
        label: "3) Fundamentals of Typescript ",
        secondlist: [
            {
                label: "TypeScript Presentation",
            },
            {
                label: "Getting Started Exercises with TypeScript and Node.js",
            },
            {
                label: "Fundamentals of JavaScript and Node.js Quiz",
            },
            {
                label: "Topics Covered in the Quiz:",
                secondlist: [
                    {
                        label: "A) Background of JavaScript and How to use JavaScript in Browser",
                    },
                    {
                        label: "B) Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)",
                    },
                    {
                        label: "C) Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:",
                        link: "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing",
                        linklabel: '(View Document)',
                    },
                    {
                        label: "D) How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:",
                        link: "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing",
                        linklabel: '(View Document)',
                        description: 'Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.',
                    },
                    {
                        label: "E) Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)",
                    },
                    {
                        label: "F) Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)",
                    },
                    {
                        label: "G) Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)",
                    },
                    {
                        label: "H) Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)",
                    },
                    {
                        label: "I) Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)",
                    },
                    {
                        label: "J) JavaScript promises, mastering the asynchronous",
                        link: "https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript",
                        linklabel: 'Visit Website',
                    },
                    {
                        label: "K) New JavaScript Features in ECMAScript 2022 and 2021",
                        link: "https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg",
                        linklabel: 'Visit Website',
                    },
                ],
            },
        ],
    },
    {
        label: "Object-Oriented Programming with TypeScript",
        secondlist: [
            {
                label: "Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript",
                link: 'https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1',
                linklabel: '(Visit Website)',
            },
            {
                label: "Learning Repository",
                link: 'https://github.com/panaverse/learn-typescript',
                linklabel: '(Visit Github)',
            },
            {
                label: "In Class Companion projects and articles for Learning TypeScript",
                link: 'https://www.learningtypescript.com/',
                linklabel: '(Visit Website)',
            },
            {
                label: "Homework Project",
                link: 'https://github.com/panaverse/typescript-node-projects',
                linklabel: '(Visit Github)',
            },
            {
                label: "Fundamentals of TypeScript Quiz",
            },
            {
                label: "TypeScript Professional Proficiency Quiz",
            },
        ],
    },
    {
        label: "TypeScript for React",
        secondlist: [
            {
                label: "Minimal TypeScript Crash Course For React With Interactive Code Exercises",
                link: "https://profy.dev/article/react-typescript",
                linklabel: "(Visit Website)",
            },
        ],
    },

    {
        label: "TypeScript for React",
        secondlist: [
            {
                label: "Quarter Break Assignments and Quizzes ",
                secondlist: [
                    {
                        label: "",
                        link: "https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge ",
                        linklabel: "https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge ",
                    },
                    {
                        label: "",
                        link: "https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app",
                        linklabel: "https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app",
                    },
                    {
                        label: "",
                        link: "https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui",
                        linklabel: "https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui",
                    },
                    {
                        label: "Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document: ",
                        link: "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing",
                        linklabel: "(View Document)",
                        description: "The best-developed Website will be hosted on www.panaverse.co domain.",
                    },
                    {
                        label: "Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document: ",
                        link: "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing",
                        linklabel: "(View Document)",
                        description: "The best-developed Website will be hosted on www.piaic.org domain.",
                    },
                ]
            },
            {
                label: "After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:",
                secondlist: [
                    {
                        label: "1) Fundamentals of Version Control with Git Quiz",
                        secondlist: [
                            {
                                label: "Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)",
                                link: "https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF",
                                linklabel: "(Watch Here)"
                            },
                            {
                                label: "Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther ",
                            },
                            {
                                label: "We will also cover these readings:",
                                secondlist: [
                                    {
                                        label: "",
                                        link: "https://help.github.com/articles/markdown-basics/",
                                        linklabel: "https://help.github.com/articles/markdown-basics/",
                                    },
                                    {
                                        label: "",
                                        link: "http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github",
                                        linklabel: "http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github",
                                    },
                                    {
                                        label: "",
                                        link: "http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences",
                                        linklabel: "http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences",
                                    },
                                    {
                                        label: "",
                                        link: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing",
                                        linklabel: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing",
                                    },
                                    {
                                        label: "",
                                        link: "http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches",
                                        linklabel: "http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches",
                                    },
                                ],
                            },
                            {
                                label: "For practice:",
                                link: "https://try.github.io/levels/1/challenges/1",
                                linklabel: "https://try.github.io/levels/1/challenges/1"
                            },
                            {
                                label: "Homework:",
                                link: "https://www.datacamp.com/courses/introduction-to-git-for-data-science",
                                linklabel: "https://www.datacamp.com/courses/introduction-to-git-for-data-science"
                            },
                            {
                                label: "Git Cheatsheet",
                                link: "https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html",
                                linklabel: "https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html"
                            },
                            {
                                label: "Git Quiz",
                                secondlist: [
                                    {
                                        label: "Total Questions:60 , Total Time: 75 minutes",
                                    },
                                ],
                            },
                        ],

                    },
                    {
                        label: "2. TypeScript Proficiency Quiz",
                        secondlist: [
                            {
                                label: "Study Material: ",
                                link: "https://github.com/panaverse/learn-typescript ",
                                linklabel: "https://github.com/panaverse/learn-typescript"
                            }
                        ],
                        description: "Total Question:63 , Total Time: 120 minutes"
                    }
                ]
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
                                    base: "4xl",
                                    sm: "5xl",
                                    md: "6xl",
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
                                    CS-101: Object-Oriented Programming using TypeScript{" "}
                                </chakra.span>

                            </chakra.h1>
                            <chakra.p
                                mt={{
                                    base: 3,
                                    sm: 5,
                                    md: 5,
                                }}
                                fontSize={{
                                    sm: "lg",
                                    md: "xl",
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
                                We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.
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
