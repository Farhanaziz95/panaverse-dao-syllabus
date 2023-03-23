'use client'

import { Box, Icon, Image, Text, chakra, useColorModeValue } from '@chakra-ui/react'

import Header from '../../components/nav'
import MultiTierList from '../../components/multilevellist'
import TopFooter from '../../components/footer'

const data = [
    {
        label: "1) Next.js 13 Web Development  ",
        secondlist: [
            {
                label: "Next 13 Official Documentation",
                link: "https://beta.nextjs.org/docs ",
                linklabel: "(View Documentation)"
            },
            {
                label: "Latest Learn React Official Website",
                link: "https://beta.reactjs.org/learn",
                linklabel: "(View Documentation)"
            },
            {
                label: "Learn Next.js 13 Learning Repo",
                link: "https://github.com/panaverse/learn-nextjs",
                linklabel: "(View GitHub)"
            },
            {
                label: "First Project for Quarter 2 Students: Build a Resume Website and Deploy it on a Custom Domain",
            },
            {
                label: "All Quarter 2 students are required to Build their resume/CV website using Next.js 13 and Tailwind CSS",
                secondlist: [
                    {
                        label: "Watch this video to learn:",
                        link: "https://morioh.com/p/45a246d927c9",
                        linklabel: "(View Website)"
                    },
                    {
                        label: "Once you have built your resume website, buy a domain if you can afford it and host your resume website on a custom domain:",
                        link: "https://www.godaddy.com/en-pk",
                        linklabel: "(View Website)"
                    },
                    {
                        label: "Add your custom domain to your Vercel Project:",
                        link: "https://vercel.com/docs/concepts/projects/domains",
                        linklabel: "(View Website)"
                    },
                    {
                        label: "However, if you cannot afford it find a way to get it for free:",
                        link: "https://www.forbes.com/advisor/business/free-domain-name/",
                        linklabel: "(View Website)"
                    },
                    {
                        label: "You will get your website graded by a faculty member in class and receive a Report Card which you will always bring to class.",

                    },
                ]
            },
        ],
    },
    {
        label: "2) Next.js 13 using Chakra UI (Remote Zoom Class)",
        secondlist: [
            {
                label: "CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items",
                link: "https://www.freecodecamp.org/news/css-flexbox-complete-guide/",
                linklabel: "(View Document)"
            },
            {
                label: "Chakra UI Docs",
                link: "https://chakra-ui.com/getting-started",
                linklabel: "(View Document)",
            },

        ],

    },
    {
        label: "3) UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)",
        secondlist: [
            {
                label: "Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano",
                link: "https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa ",
                linklabel: "(View Website)"
            },
            {
                label: "Figma Design Kit for TailwindCSS",
                link: "https://www.figma.com/community/file/768809027799962739",
                linklabel: "(View Website)",
            },
            {
                label: "Chakra UI Figma Kit",
                link: "https://www.figma.com/community/file/971408767069651759 ",
                linklabel: "(View Website)",
            },

        ],

    },
    {
        label: "4) API Routes with Next.js (Remote Zoom Class)",
        secondlist: [
            {
                label: "API Routes",
                link: "https://nextjs.org/docs/api-routes/introduction",
                linklabel: "(View Document)"
            },

        ],

    },
    {
        label: "5) APIs with Next.js and tRPC (Remote Zoom Class)",
        secondlist: [
            {
                label: "Build a tRPC CRUD API Example with Next.js	",
                link: "https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/",
                linklabel: "(View Website)"
            },
            {
                label: "Stop building REST APIs for your Next.js apps, use tRPC instead",
                link: "https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/",
                linklabel: "(View Website)",
            },

        ],

    },
    {
        label: "6) SQL and Prisma",
        secondlist: [
            {
                label: "Start from scratch with relational databases",
                link: "https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres",
                linklabel: "(View Document)"
            },
            {
                label: "SQL For Beginners Video Tutorial",
                link: "https://www.youtube.com/watch?v=5hzZtqCNQKk",
                linklabel: "(Watch Here)",
            },
            {
                label: "Database Management Systems and SQL – Tutorial for Beginners",
                link: "https://www.freecodecamp.org/news/dbms-and-sql-basics/",
                linklabel: "(View Website)",
            },

        ],

    },
    {
        label: "7) Next.js 13 using TailwindCSS (Remote Zoom Class)",
        secondlist: [
            {
                label: "Modern CSS with Tailwind, Second Edition by Noel Rappin",
                link: "https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/",
                linklabel: "(View Website)"
            },

        ],

    },
    {
        label: "8) AWS Application Composer (Remote Zoom Class)",
        secondlist: [
            {
                label: "What is AWS Application Composer?",
                link: "https://www.youtube.com/watch?v=BujE_tik5r8",
                linklabel: "(Watch Here)",
            },
            {
                label: "Event-driven apps with AWS Application Composer",
                link: "https://www.youtube.com/watch?v=p411uh363jQ",
                linklabel: "(Watch Here)",
            },
            {
                label: "Visually design and build serverless applications quickly",
                link: "https://aws.amazon.com/application-composer/",
                linklabel: "(View Documentation)",
            },
            {
                label: "Must Have: Create Free AWS Account",
                secondlist: [
                    {
                        label: "AWS Free Tier  ",
                        link: "https://aws.amazon.com/free/",
                        linklabel: "https://aws.amazon.com/free/",
                    },

                ],
                description: "Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.",
            },
            {
                label: "Now you can create a virtual VISA Debit card through the NayaPay app which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.",
                link: "https://www.nayapay.com/",
                linklabel: "(https://www.nayapay.com/)",
            },
            {
                label: "You can also get a $300 credit ",
                link: "https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html",
                linklabel: "https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html",
            },
        ],
    },
    {
        label: "9) Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)",
        secondlist: [
            {
                label: "Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps",
                link: 'https://github.com/panaverse/learn-multicloud-api-development ',
                linklabel: '(Visit GitHub)',
            },

        ],
    },
    {
        label: "Web 2.0 Projects",
        secondlist: [
            {
                label: "1) Next.js Projects",
                link: "https://github.com/panaverse/nextjs-projects",
                linklabel: "(Visit Website)",
            },
            {
                label: "2) Styling Next.js Projects using TailwindCSS and Chakra UI",
                link: "https://github.com/panaverse/styling-nextjs-projects ",
                linklabel: "(Visit GitHub)",
            },
            {
                label: "3) Todo Full-Stack App",
                link: "https://github.com/ogzhanolguncu/min-todo ",
                linklabel: "(Visit GitHub)",
            },
            {
                label: "4) Build a Twitter Clone",
                link: "https://www.youtube.com/watch?v=nzJsYJPCc80 ",
                linklabel: "(Watch Here)",
            },
        ],
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
                                    W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform{" "}
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
                                The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
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
