import { koreaMock } from "@/app/lib/mockData";
import { DataItem } from "@/app/lib/types";
import TravelCard from "@/app/ui/TravelCard";
import {
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

const KoreaPage = () => (
  <Stack p={8} spaceY={8} my={8}>
    <Center>
      <Heading size="6xl">Korea 🇰🇷</Heading>
    </Center>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gapY={4}>
      {Array(10)
        .fill(koreaMock[0])
        .map((koreaElem: DataItem, i) => (
          <TravelCard {...koreaElem} key={`${koreaElem.title}${i}`} />
        ))}
    </SimpleGrid>
  </Stack>
);

export default KoreaPage;
