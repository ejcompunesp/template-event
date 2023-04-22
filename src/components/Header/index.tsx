import { useEffect, useState } from "react";
import {
  Box,
  Image,
  Button,
  Icon,
  Fade,
  useDisclosure,
  Link,
  HStack,
  VStack,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";

import Logo from "../../assets/images/logo-off-2.png";

const boxStyle = {
  w: "100%",
  p: "0.6rem 3rem 0.6rem 1.5rem",
  pr: {base:"1.5rem", sm:"3rem"},
  color: "white",
  display: "flex",
  alignItems: "center",
  pos: "fixed",
  transition: "all 0.5s",
  "::after": {
    opacity: 0,
  },
};

const LinkStyle = {
  w: "fit-content",
  fontWeight: "bold",
  transition: "all 0.2s",
  ":hover": {
    outline: "2px solid yellow",
    textDecoration: "none",
  },
};

const MenuLinkStyle = {
  ":hover": {
    outline: "none",
    textDecoration: "none",
  },
};

const MenuStyle = {
  w: "100vw",
  h: "100vh",
  pos: "absolute",
  top: "0",
  left: "0",
  pt: "7rem",
  pl: "2rem",
  fontSize: "3xl",
  bg: "#000000",
};

const HamburgerIcon = () => {
  return (
    <Icon boxSize={6} viewBox="0 0 24 24" fill="white">
      <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z" />
    </Icon>
  );
};
const CloseIcon = () => {
  return (
    <Icon boxSize={6} viewBox="0 0 24 24" fill="white">
      <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
    </Icon>
  );
};

const Header = () => {
  
  const { onToggle, isOpen, getDisclosureProps } = useDisclosure();
  const disclosureProps = getDisclosureProps();
  
  const [ imgHeight, setImgHeight ] = useState("5rem");
  const [ headerOpacity, setHeaderOpacity ] = useState("#0000");
  
  useEffect(() => {
    window.addEventListener("scroll", updateHeader);
  }, [ imgHeight, headerOpacity ]);

  const updateHeader = () => {
    if (window.scrollY > 0) {
      setHeaderOpacity("#000f");
      setImgHeight("2.5rem");
    } else if (window.scrollY <= 0) {
      setHeaderOpacity("#0000");
      setImgHeight("5rem");
    }
  };

  const toggleScroll = () => {
    console.log("Oi")
    let doc = document.body.style.overflow = isOpen ? "visible" : "hidden";
    onToggle()
  }

  return (
    <Box sx={ boxStyle } bg={ headerOpacity } zIndex={1}>
      <LinkBox zIndex={1}>
        <LinkOverlay href="">
          <Image
            src={ Logo }
            height={{ base: "2.5rem", md: imgHeight }}
            transition="all 0.5s"
          />
        </LinkOverlay>
      </LinkBox>
      <HStack marginLeft="auto" hideBelow="sm" spacing="2rem">
        <Link sx={ LinkStyle } href="">
          OFFstory
        </Link>
        <Link sx={ LinkStyle } href="">
          Line-up
        </Link>
        <Link sx={ LinkStyle } href="">
          FAQ
        </Link>
      </HStack>
      <Box ml="auto" hideFrom="sm" gap="0.2rem">
        <Button
          rightIcon={ isOpen ? <CloseIcon /> : <HamburgerIcon /> }
          variant="unstyled"
          display="inline-flex"
          px="0"
          zIndex={1}
          onClick={toggleScroll}
        > 
          Menu
        </Button>
      </Box>
      <Fade in={ isOpen } unmountOnExit={ true }>
        <Box sx={ MenuStyle } { ...disclosureProps }>
          <VStack alignItems="left" spacing={0}>
            <Link sx={{ ...LinkStyle, ...MenuLinkStyle }} href="">OFFstory</Link>
            <Link sx={{ ...LinkStyle, ...MenuLinkStyle }} href="">Line-up</Link>
            <Link sx={{ ...LinkStyle, ...MenuLinkStyle }} href="">FAQ</Link>
          </VStack>
        </Box>
      </Fade>
    </Box>
  );
};

export default Header;
