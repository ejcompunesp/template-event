import { Box, Flex, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
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
      <Text fontSize="3rem" mb="32px" >NEWSROOM</Text>
      {mockArray.map((object, index) => (
        <Wrap key={index} mb="32px">
          <WrapItem w="40%">
            <Image
              mr="16px"
              h="150"
              w="100%"
              fit="cover"
              src={object.image}
              borderRadius="lg"
            />
          </WrapItem>
            <Flex direction="column" ml="6">
              <Text fontSize="1rem">{object.date}</Text>
              <Text fontSize="1.5rem">{object.title}</Text>
            </Flex>
        </Wrap>
      ))}
    </Box>
  );
};

export default NewsRoom;
