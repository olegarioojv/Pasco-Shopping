// Components
import Navbar from "../../components/Navbar/Navbar";
// Page
import {
  BottomImage,
  Center,
  Content,
  HomeContainer,
  Side,
  TopImage,
} from "./Home.styled";

export function Home() {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <Side>
          <img src="/home_img_1.png" alt="" />
        </Side>

        <Center>
          <TopImage src="/home_img_2.png" />

          <Content>
            <h1>ULTIMATE</h1>
            <h2>SALE</h2>
            <p>NEW COLLECTION</p>
            <button>SHOP NOW</button>
          </Content>

          <BottomImage src="/home_img_4.png" />
        </Center>

        <Side>
          <img src="/home_img_3.png" alt="" />
        </Side>
      </HomeContainer>
    </>
  );
}

export default Home;
