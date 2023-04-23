import { Box, Flex, Image, Text } from "@chakra-ui/react";
import BackgroundImage from "../../assets/images/background-image.webp";

type Mock = {
  date: string;
  title: string;
  image: string;
};

const mock: Mock = {
  date: "23-05-01",
  title: "There Are No Genre Boundaries in Outer Space",
  image: BackgroundImage,
};

const mockArray = Array.from({ length: 3 }, () => mock);

const NewsRoom = () => {
  return (
    <Box>
      <Text fontSize="7xl">NEWSROOM</Text>
      {mockArray.map((object) => (
        <Flex direction="row" my="6" alignItems="center">
          <Image
            h="150"
            w="50%"
            fit="cover"
            src={object.image}
            borderRadius="lg"
          />
          <Flex direction="column" ml="6">
            <Text fontSize="lg">{object.date}</Text>
            <Text fontSize="3xl">{object.title}</Text>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default NewsRoom;
