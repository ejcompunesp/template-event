import { AspectRatio, Box, Image } from "@chakra-ui/react";
import { Footer, Header, LineUp, NewsRoom } from "components";
import {
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiArrowDown,
} from "react-icons/fi";
import BackgroundImage from "../assets/images/background-image.jpg";

const Root = () => {
  return (
    <>
      <Header />
      <Box
        h="100vh"
        w="100vw"
        backgroundSize="100vw"
        backgroundImage={BackgroundImage}
      >
        <div className="left-0 flex flex-col space-y-64 mx-5">
          <div className="pt-40 ">
            <div>
              <a href="https://www.facebook.com">
                <FiFacebook color="white" size={30} />
              </a>
            </div>
            <div className="my-5">
              <a href="https://www.instagram.com">
                <FiInstagram color="white" size={30} />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com">
                <FiYoutube color="white" size={30} />
              </a>
            </div>
          </div>
          <a href="/">
            <FiArrowDown color="white" size={30} />
          </a>
        </div>
      </Box>
      <Box
        mx={{ base: "0", sm: "2rem", md: "5rem", xl: "auto" }}
        fontWeight="bold"
        maxW={{ xl: "6xl" }}
        p="1rem"
      >
        <Box my="10">
          <LineUp />
        </Box>
        <Box my="20">
          <NewsRoom />
        </Box>
        <AspectRatio maxWidth="100%" ratio={16 / 9}>
          <Image
            borderRadius="lg"
            width="560"
            height="315"
            src={BackgroundImage}
            title="YouTube video player"
          />
        </AspectRatio>
        <Footer />
      </Box>
    </>
  );
};

export default Root;
