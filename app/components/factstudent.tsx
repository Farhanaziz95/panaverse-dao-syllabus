'use client'

import {
    Box,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react';

import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { ReactNode } from 'react';

interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function FactStatistics() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Our Organization is expanding, you could be in it too.
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'We Server'}
            stat={'5,000+ Students'}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'In'}
            stat={'4 Different Cities'}
            icon={<FiServer size={'3em'} />}
          />
          <StatsCard
            title={'Who Belongs'}
            stat={'All over Pakistan'}
            icon={<GoLocation size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    );
  }