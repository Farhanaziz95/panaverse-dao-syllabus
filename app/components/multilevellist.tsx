'use client'

import { List, ListIcon, ListItem } from "@chakra-ui/react";

import { MdCheckCircle } from "react-icons/md";

type Item = {
    label: string;
    secondlist?: Item[];
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
          >
            <ListIcon
              as={MdCheckCircle}
              color="green.500"
              size={item.secondlist ? "md" : "sm"}
            />
            {item.label}
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
