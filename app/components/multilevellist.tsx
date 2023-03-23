'use client'

import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";
import { List, ListIcon, ListItem, chakra } from "@chakra-ui/react";

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
        <List  spacing={2} mt={2} ml={6}>
            {listData.map((item) => (
                <ListItem
                    key={item.label}
                    fontSize={item.secondlist ? "lg" : "md"}
                    fontWeight={item.secondlist ? "bold" : "medium"}
                >
                    <ListIcon
                        as={item.secondlist ? FaDotCircle : FaRegDotCircle}
                        color="green.500"
                        size={item.secondlist ? "md" : "sm"}
                    />
                    
                        {item.label}
                        {item.link && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {" "}
                  {item.linklabel && <chakra.span>{item.linklabel}</chakra.span>}
                            </a>
                        )}
                        {item.description && <p>{item.description}</p>}
                    
                    {item.secondlist && renderList(item.secondlist)}
                </ListItem>
            ))}
        </List>
    );
};

export default function MultiTierList({ data }: Props) {
    return (
        <List spacing={3}>{renderList(data)}</List>
    );
};

[
    {
        lable: 'first level item 1',
        secondlist: [{
            lable: 'second level item 1',

        },
        {
            lable: 'second level item 2',
        }
        ]
    },
    {
        lable: 'first level item 2',

    },
    {
        lable: 'first level item 1',
        secondlist: [{
            lable: 'second level item 1',

        },
        {
            lable: 'second level item 2',
            secondlist: [{
                lable: 'third level item 1',

            },
            {
                lable: 'third level item 2',

            }
            ]
        },
        {
            lable: 'second level item 1',

        }
        ],

    },

]
