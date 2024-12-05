import { Card, IconButton, Image, Flex, Box, Button } from "@chakra-ui/react";
import { DataItem } from "@/app/lib/types";
import { IoIosMore } from "react-icons/io";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const TravelCard = ({ title, description, imgSrc }: DataItem) => (
  <DrawerRoot>
    <DrawerBackdrop />

    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Extra info about the thing</DrawerTitle>
        <DrawerCloseTrigger />
      </DrawerHeader>
      <DrawerBody>
        <p>Oh la la la lot's of other things about this</p>
      </DrawerBody>
    </DrawerContent>
    <Card.Root minW="xs" maxW="sm" p={3.5}>
      <Image src={imgSrc} alt={title} />
      <Flex mt={2} py={1} justifyContent="space-between">
        <Box>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Box>
        <DrawerTrigger asChild>
          <IconButton color="black" rounded="full" variant="ghost" size="xs">
            <IoIosMore />
          </IconButton>
        </DrawerTrigger>
      </Flex>
    </Card.Root>
  </DrawerRoot>
);

export default TravelCard;
