import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Spotify from "../../assets/icons/spotify.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Arrow from "../../assets/icons/arrow-bottom.svg";
import BgImage from "../../assets/images/event-image.jpg"
import { Image, Box } from '@chakra-ui/react'

import { Avatar, Card, Header } from "components";

const Home = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen items-center justify-center h-screen">
                <div className="fixed left-0 flex flex-col space-y-64">
                    <div className=" pt-32">
                        <a href="https://www.facebook.com">
                            <img className="w-6 h-6 mx-3 my-4" src={Facebook} alt="" />
                        </a>
                        <a href="https://www.instagram.com">
                            <img className="w-6 h-6 mx-3 my-4" src={Instagram} alt="" />
                        </a>
                        <a href="https://open.spotify.com">
                            <img className="w-6 h-6 mx-3 my-4" src={Spotify} alt="" />
                        </a>
                        <a href="https://www.youtube.com">
                            <img className="w-6 h-6 mx-3 my-4" src={Youtube} alt="" />
                        </a>
                    </div>
                    <a href="/">
                        <img className="w-6 h-6 mx-3 my-4" src={Arrow} alt="" />
                    </a>
                </div>
                <Image src={BgImage}
                    w="100%"
                    h="100vh"
                    filter='grayscale(90%)'
                    position="relative"
                    zIndex="-100" />
                <div className="p-6 max-w-sm mx-auto bg-violet-100 rounded-xl shadow-lg flex-row items-center space-x-4">
                    <div>
                        <Avatar />
                    </div>
                    <div className="mt-2">
                        <div className="text-xl font-medium text-black">Rota 1</div>
                        <p className="text-slate-500">You have a new message!</p>
                    </div>
                    <div className="mt-4">
                        <Card
                            title="Interest topic"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. LorIpsum.
              "
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
