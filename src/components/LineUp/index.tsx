import { Badge, Box, Text } from "@chakra-ui/react";

const songs = [
  "Bohemian Rhapsody",
  "Don't Stop Me Now",
  "We Will Rock You",
  "Somebody to Love",
  "Killer Queen",
  "Under Pressure",
  "The Show Must Go On",
  "Radio Ga Ga",
  "I Want to Break Free",
  "We Are the Champions",
  "A Kind of Magic",
  "Another One Bites the Dust",
];

const LineUp = () => {
  return (
    <Box>
      <Text fontSize="7xl">LINE-UP</Text>
      {songs.map((element) => (
        <Badge p="4" m="4" variant="outline">
          <Text as="b">{element}</Text>
        </Badge>
      ))}
    </Box>
  );
};

export default LineUp;
