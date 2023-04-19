import { Heading } from "@chakra-ui/react";
import { NewsroomCard } from "components";

const Newsroom = () => {
  return (
    <>
      <Heading size="xl" mt="4rem">
        NEWSROOM
      </Heading>
      <NewsroomCard
        date="25-04-2023"
        title="Lorem ipsum dolor sit amet consectetur adipisicing."
        src="src/assets/images/festival_3.jpg"
        href=""
      />
      <NewsroomCard
        date="26-05-2023"
        title="Lorem ipsum dolor sit amet consectetur adipisicing."
        src="src/assets/images/festival_2.jpg"
        href=""
      />
      <NewsroomCard
        date="20-02-2024"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolores?"
        src="src/assets/images/festival_1.jpg"
        href=""
      />
    </>
  );
};

export default Newsroom;