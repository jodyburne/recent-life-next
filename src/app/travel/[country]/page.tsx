import { koreaMock, japanMock } from "@/app/lib/mockData";
import { DataItem } from "@/app/lib/types";
import TravelCard from "@/app/ui/TravelCard";
import { Center, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

const CountryPage = async ({
  params,
}: {
  params: Promise<{ country: string }>;
}) => {
  const country = (await params).country;
  const name = country.charAt(0).toUpperCase() + country.slice(1);

  if (country !== "japan" && country !== "korea")
    return <Center>Not found</Center>;

  const countryMapping = {
    korea: {
      mock: koreaMock,
      emoji: "🇰🇷",
    },
    japan: {
      mock: japanMock,
      emoji: "🇯🇵",
    },
  };

  const { mock, emoji } = countryMapping[country];
  return (
    <Stack px={8} spaceY={8} py={16}>
      <Center>
        <Heading size="6xl">
          {name} {emoji}
        </Heading>
      </Center>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gapY={4}>
        {Array(10)
          .fill(mock[0])
          .map((elem: DataItem, i) => (
            <TravelCard {...elem} key={`${elem.title}${i}`} />
          ))}
      </SimpleGrid>
    </Stack>
  );
};

export default CountryPage;
