'use client'

import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";
import { Link, List, ListIcon, ListItem, Text, chakra, useColorModeValue } from "@chakra-ui/react";

type Item = {
    label: string;
    secondlist?: Item[];
    description?: string;
    link?: string;
    linklabel?: string;
};

type Props = {
    data: Item[];
};

const renderList = (listData: Item[]) => {
    return (
        <List spacing={2} mt={2} ml={6}>
            {listData.map((item) => (
                <ListItem
                    key={item.label}
                    fontSize={item.secondlist ? "lg" : "md"}
                    fontWeight={item.secondlist ? "bold" : "medium"}
                    color={useColorModeValue('Black','White')}
                >
                    <ListIcon
                        as={item.secondlist ? FaDotCircle : FaRegDotCircle}
                        color="green.500"
                        size={item.secondlist ? "md" : "sm"}
                    />

                    {item.label}
                    {item.link && (
                        <Link href={item.link} color={useColorModeValue('Blue.500','Blue.500')}  isExternal>
                            {" "}
                            {item.linklabel && <chakra.span color={useColorModeValue('blue.500','blue.500')}>{item.linklabel}</chakra.span>}
                      </Link>
                        // <a color={'blue'} href= target="_blank" rel="noopener noreferrer">
                            
                        // </a>
                    )}
                    {item.description && (<Text color={useColorModeValue('Black','White')}>{item.description}</Text>)}

                    {item.secondlist && renderList(item.secondlist)}
                </ListItem>
            ))}
        </List>
    );
};

export default function MultiTierList({ data }: Props) {
    return (
        <List bg={useColorModeValue('#e2e8f0','gray.700')} spacing={3}>{renderList(data)}</List>
    );
};

