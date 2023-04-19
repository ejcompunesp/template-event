import { 
  Image,
  Box,
  Flex,
  LinkBox,
  LinkOverlay,
  Text 
} from "@chakra-ui/react";

type CardProps = {
  date: string;
  title: string;
  src: string;
  href: string;
};

const CardStyle = {
  ":hover img": {
    opacity: "0.5",
  },
  ":hover div": {
    bg: "yellow",
  },
};

const NewsRoomCard = ({ date, title, src, href }: CardProps) => {
  return (
    <>
      <LinkBox mt="2rem" fontWeight="bold">
        <Flex sx={ CardStyle } flexDir={{ base: "column", md: "row" }}>
          <Box w="100%" pos={{ md: "relative" }}>
            <Image
              src={ src }
              w="100%"
              h="100%"
              fit="cover"
              pos={{ md: "absolute" }}
              transition="all 0.2s"
            />
          </Box>
          <LinkOverlay href={ href } p={{ base: "1rem 0 0 0", md: "1rem 1rem 1rem 2rem" }}>
            <Text fontSize="lg">{ date }</Text>
            <Text fontSize="2xl">{ title }</Text>
          </LinkOverlay>
        </Flex>
      </LinkBox>
    </>
  );
};

export default NewsRoomCard;
