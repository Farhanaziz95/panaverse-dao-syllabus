'use client'

import {
  Box,
  Button,
  ButtonProps,
  Collapse,
  Divider,
  Flex,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';

import Logo from './logo'

export default function Header(props: ButtonProps) {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box >
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        position={{base:"initial",lg:"fixed",md:"fixed"}}
        w="100%"
        zIndex="100">
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text> */}

          <Logo />
          <Flex alignItems="center" display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          

          
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'https://portal.piaic.org/signup'}
            _hover={{
              bg: 'pink.300',
            }}>
            Get Started
          </Button>
          <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: 'none' }}
            w="fit-content"
            {...props}>
            {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                px={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel,spLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      // p={1}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Text fontSize={'xs'}>{spLabel}</Text>
        <Divider orientation='horizontal' />
      <Stack direction={'row'} align={'center'}>
        <Box>
        
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
            fontSize={'xs'}>
              
            {label}
          </Text>
          <Text fontSize={'xs'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  spLabel?:string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/About',
  },
  {
    label: 'Subjects',
    children: [
      {
        label: 'Object-Oriented Programming using TypeScript',
        subLabel: 'learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript.',
        href: '/CoreCourse/Q1',
        spLabel:"Quarter I"

      },
      {
        label: ' Next.js 13 and Cloud Development Kit',
        subLabel: 'The technologies covered in this course will be Next.js 13, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma e.t.c',
        href: '/CoreCourse/Q2',
        spLabel:"Quarter II"

      },
      {
        label: 'Full-Stack Template and API Product',
        subLabel: 'Earn While You Learn Projects',
        href: '/CoreCourse/Q3',
        spLabel:"Quarter III"

      },
    ],
  },
  {
    label: 'Specialization',
    children: [
      {
        label: 'Smart Contracts and Web 3.0 Dapps',
        href: '/Special/Web3/Q4',
        spLabel:"Quarter IV: Web 3 and Metaverse"
      },
      {
        label: 'Open Virtual and Augmented Metaverse',
        href: '/Special/Web3/Q5',
        spLabel:"Quarter V: Web 3 and Metaverse"

      },
      {
        label: 'Intelligent APIs and Python Programming',
        href: '/Special/AI/Q4',
        spLabel:"Quarter IV: Artificial Intelligence (AI) and Deep Learning"
      },
      {
        label: 'Deep Learning and MLOps',
        href: '/Special/AI/Q5',
        spLabel:"Quarter V: Artificial Intelligence (AI) and Deep Learning"

      },
      {
        label: 'Kubernetes Application Developer',
        href: '/Special/Cloud/Q4',
        spLabel:"Quarter IV: Cloud-Native Computing"
      },
      {
        label: 'Multi-Cloud APIs using CDK',
        href: '/Special/Cloud/Q5',
        spLabel:"Quarter V: Cloud-Native Computing"

      },
      {
        label: 'Ambient Computing with VA & MPD',
        href: '/Special/IOT/Q4',
        spLabel:"Quarter IV: Ambient Computing and IoT"
      },
      {
        label: 'Embedded using C and Rust',
        href: '/Special/IOT/Q5',
        spLabel:"Quarter V: Ambient Computing and IoT"

      },
      {
        label: 'Python for Biologists',
        href: '/Special/Genomics/Q4',
        spLabel:"Quarter IV: Genomics and Bioinformatics"
      },
      {
        label: 'Bioinformatics with Python',
        href: '/Special/Genomics/Q5',
        spLabel:"Quarter V: Genomics and Bioinformatics"

      },
      {
        label: 'CCNA 200-301 Certification',
        href: '/Special/Network/Q4',
        spLabel:"Quarter IV: Network Programmability and Automation"
      },
      {
        label: 'Network Programmability and Automation',
        href: '/Special/Network/Q5',
        spLabel:"Quarter V: Network Programmability and Automation"

      },
    ],
  },
  
  {
    label: 'Articals',
    href: '/Articals',
  },
];