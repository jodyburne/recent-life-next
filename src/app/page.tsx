import React from "react";
import Link from "next/link";
import { Center, Heading, Stack, Flex } from "@chakra-ui/react";
export default function Home() {
  return (
    <Stack px={8} spaceY={8} py={16} height="100vh">
      <Center>
        <Heading size="6xl">Thank you for coming by...</Heading>
      </Center>
      <Center>
        <Stack spaceY={2}>
          <img
            src="https://pyxis.nymag.com/v1/imgs/bc9/ccb/936534d0b82b77cf0ffbac92010ee38ea3-06-al-pacino.2x.rvertical.w512.jpg"
            alt="Next.js logo"
            width={250}
            height={312}
          />

          <Flex width={250} justifyContent="space-between">
            <Link href="/travel/korea">
              <Heading size="sm">Korea</Heading>
            </Link>
            <Link href="travel/japan">
              <Heading size="sm">Japan</Heading>
            </Link>
            <Link href="/teapots">
              <Heading size="sm">Teapots</Heading>
            </Link>
          </Flex>
        </Stack>
      </Center>
    </Stack>
  );
}
