'use client'

import { Box, Icon, Image, Text, chakra, useColorModeValue } from '@chakra-ui/react'

import Header from '../../components/nav'
import MultiTierList from '../../components/multilevellist'
import TopFooter from '../../components/footer'

const data = [
    {
        label: "1) Blockchain and Metaverse Theory",
        secondlist: [
            {
                label: "The Metaverse: And How It Will Revolutionize Everything by Matthew Ball",
                link: "https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0 ",
                linklabel: "(View Website)"
            },
            {
                label: "Mastering Blockchain - Fourth Edition by Imran Bashir",
                link: "https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067 ",
                linklabel: "(View Website)"
            },

        ],
        description: "You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. "
    },
    {
        label: "2) Smart Contract Development in Solidity",
        secondlist: [
            {
                label: "Solidity Programming Essentials - Second Edition By Ritesh Modi",
                link: "https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181",
                linklabel: "(View Website)"
            },
            {
                label: "Solidity Learning Repo",
                link: "https://github.com/panaverse/defi-dapps-solidity-smart-contracts",
                linklabel: "(View GitHub)"
            },

        ],

    },
    {
        label: "3) Dapp Development using Ethers.js and Next.js 13 ",
        secondlist: [
            {
                label: "Dapp Learning Repo",
                link: "https://github.com/panaverse/dapps-nextjs",
                linklabel: "(View GitHub)"
            },

        ],

    },
    {
        label: "4) Tokennomics ",
        secondlist: [
            {
                label: "tokenomics acts as an incentive mechanism and monetary policy of the supply and demand of certain crypto or token."
            },

        ],

    },
    {
        label: "5) Blockchain Project: Create a Token and Launch ICO/IEO/IDO ",
        secondlist: [
            {
                label: "Understand the difference between IDO vs. IEO vs. ICO",
                link: "https://phemex.com/blogs/what-is-a-dex-ido",
                linklabel: "(View Website)"
            },
            {
                label: "ICO list at ICO Drops",
                link: "https://icodrops.com",
                linklabel: "(View Website)"
            },
            {
                label: "ICO List of Best New Initial Coin Offerings",
                link: "https://topicolist.com/",
                linklabel: "(View Website)"
            },
            {
                label: "Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs ",
                link: "https://cryptototem.com/ico-list/",
                linklabel: "(View Website)"
            },
            {
                label: "ICO List Online",
                link: "https://www.icolistingonline.com",
                linklabel: "(View Website)"
            },
            {
                label: "Binance IEO List",
                link: "https://coincodex.com/ieo-list/binance/",
                linklabel: "(View Website)"
            },
            {
                label: "Binance Launchpad",
                link: "https://www.coinspeaker.com/ieo/platform/binance-launchpad/",
                linklabel: "(View Website)"
            },
            {
                label: "IEO List",
                link: "https://icomarks.com/ieo",
                linklabel: "(View Website)"
            },
            {
                label: "Polkastarter",
                link: "https://polkastarter.com",
                linklabel: "(View Website)"
            },

            {
                label: "Project Part 1: How to Launch a IEO on Binance Launchpad",
                secondlist: [
                    {
                        label: "Read How to Launch an IEO ",
                        link: "https://appinventiv.com/blog/how-to-launch-an-ieo/",
                        linklabel: "(View Website)"
                    },
                    {
                        label: "Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad",
                        link: "https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04",
                        linklabel: "(View GitHub)",
                        description: "Note: Also document the alternatives to Binance Launchpad."

                    },

                ],
            },
            {
                label: "Project Part 2: How to Launch a IDO on Polkastarter",
                secondlist: [
                    {
                        label: "Review the [list of top fundraising platforms]",
                        link: "https://cryptorank.io/fundraising-platforms",
                        linklabel: "(View Website)"
                    },
                    {
                        label: "Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter",
                        link: "https://polkastarter.com",
                        linklabel: "(View Website)"
                    },

                ],
            },
            {
                label: "Project Part 3: Create a Pako Token",
                secondlist: [
                    {
                        label: "By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future",

                    },
                    {
                        label: "Therefore, for the sake of this chapter, let's imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).",

                    },
                    {
                        label: "Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.",

                    },

                ],
            },
            {
                label: "Project Part 4: Develop Crowd Sale Contract",
                secondlist: [
                    {
                        label: "This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)",

                    },
                    {
                        label: "Implement a payable buyToken() function.",

                    },
                    {
                        label: "Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought.",

                    },
                    {
                        label: "Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal 'owner' account.",

                    },
                    {
                        label: "Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.",

                    },
                    {
                        label: "You can use the openzeppelin crowd sale contracts ,  however you will have to update the code to the latest solidity version.",
                        link: "https://docs.openzeppelin.com/contracts/4.x/crowdsales",
                        linklabel: "(View Website)"
                    },
                    {
                        label: "Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.",
                        description: "Note: Before you get started writing the token contract we suggest you review the access control"
                    },

                ],
            },
            {
                label: "Project Part 5: Trying it with MetaMask",
                secondlist: [
                    {
                        label: "While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!.",

                    },
                    {
                        label: "We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.",

                    },
                    {
                        label: "When it's done, take note of what addresses the contracts were uploaded to and copy it!.",

                    },
                    {
                        label: "Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.",

                    },
                    {
                        label: "After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to 'register' it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!.",

                    },
                    {
                        label: "To do this, open the side menu and click on the 'Add token' button to get started:",

                    },
                    {
                        label: "Once you're on the token page, click on 'Add custom token' and paste in the token contract's address in the address field.",

                    },
                    {
                        label: "After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!.",

                    },

                ],
            },
            {
                label: "Project Part 6: Trying it with Multisignature Wallets",
                secondlist: [
                    {
                        label: "Read ",
                        link: "https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/",
                        linklabel: "https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
                    },
                    {
                        label: "Now use Gnosis Safe with multi-sigs to do what you did in the last part.",
                        link: "https://gnosis-safe.io/",
                        linklabel: "(View Website)"
                    },

                ],
            },
            {
                label: "Project Part 7: Sending Tokens using Ethers.js",
                secondlist: [
                    {
                        label: "Write a Typescript program to send Pako Token to some friend's address using Ethers.js.",
                        link: "https://ethereum.org/en/developers/tutorials/send-token-etherjs/",
                        linklabel: "(View Website)",
                        description: "You may follow this tutorial"
                    },

                ],
            },
            {
                label: "Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT",
                secondlist: [
                    {
                        label: "Read this NFT tutorial series",
                        link: "https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/",
                        linklabel: "(View Website)"
                    },
                    {
                        label: "Create a NFT contract using the [OpenZepplen ERC721 NFT Standard]",
                        link: "https://docs.openzeppelin.com/contracts/4.x/erc721",
                        linklabel: "(View Website)"
                    },
                    {
                        label: "You may use the Preset ERC721 contract",
                        link: "https://docs.openzeppelin.com/contracts/4.x/erc721#Presets",
                        linklabel: "(View Website)"
                    },
                    {
                        label: "Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace for sale",
                        link: "https://opensea.io/",
                        linklabel: "(View Website)"
                    },
                    {
                        label: "Implement a ERC721 Market ",
                        link: "https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/",
                        linklabel: "(View Website)"
                    },

                ],
            }


        ],
        description: "As you probably know, the ICO ('Initial Coin Offering') industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest crowdfunding projects , and you'll notice that blockchain projects absolutely dominate the list.",
        link: "https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects",
        linklabel: "(Visit Website)",
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
                                    W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps{" "}
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
                                In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.
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
