import { Divider, Flex, Image, Text, Link } from "@chakra-ui/react";
import ejLogo from "../../assets/images/EJ-logo.svg"
import unespLogo from "../../assets/images/unesp-logo-13.png"
import buhLogo from "../../assets/images/BUH-BEZALKO-logo-2-400x446.png"
import foozLogo from "../../assets/images/fooz.svg"

const imgStyle = {
  height: "6rem",
  objectFit: "contain",
};

const dividerStyle = {
  h: "3px",
  bg: "black",
  border: "0",
  opacity: "0.8",
};

const linkStyle = {
  ":hover": {
    textDecoration: "none",
  },
};

const Footer = () => {
  return (
    <>
      <Divider sx={ dividerStyle } mt="7rem"/>
      <Flex gap={{ base: "2rem", md: "3rem" }} justify="center" my="2rem" flexDir={{ base: "column", md: "row" }}>
        <Flex flexDir="column">
          <Text align="center" fontSize="sm" mb="0.5rem">
            Host of the festival
          </Text>
          <Image sx={ imgStyle } src={ ejLogo } />
        </Flex>
        <Divider sx={ dividerStyle } hideFrom="md" />
        <Flex flexDir="column">
          <Text align="center" fontSize="sm" mb="0.5rem">
            Main sponsor
          </Text>
          <Image sx={ imgStyle } src={ unespLogo } />
        </Flex>
        <Divider sx={ dividerStyle } hideFrom="md" />
        <Flex flexDir="column">
          <Text align="center" fontSize="sm" mb="0.5rem">
            Sponsors
          </Text>
          <Image sx={ imgStyle } src={ buhLogo } />
        </Flex>
      </Flex>
      <Divider sx={ dividerStyle } my="1rem" />
      <Flex justify="space-between" flexDir={{ base: "column", md: "row" }} rowGap="1rem">
        <Link href="" sx={ linkStyle }>
          OFFstory
        </Link>
        <Link href="" sx={ linkStyle }>
          Line-up
        </Link>
        <Link href="" sx={ linkStyle }>
          FAQ
        </Link>
      </Flex>
      <Divider sx={ dividerStyle } my="1rem" opacity="0.8" />
      <Flex justify="space-between" flexDir={{ base: "column", md: "row" }} rowGap="1rem">
        <Text fontSize="xs">
          Copyright 2023 EJComp
        </Text>
        <Link href="" sx={ linkStyle } fontSize="xs">
          Privacy Policy
        </Link>
        <Image
          alignSelf="flex-start"
          src={ foozLogo }
          height="2rem"
        />
      </Flex>
    </>
  );
};

export default Footer;
