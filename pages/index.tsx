import axios from "axios";
import Headertest from "../components/Headertest";
import MeetupsList from "../components/MeetupsList";
import { Data } from "../typings";
interface Props {
  meetups: Data[]
}
// require('dotenv').config()


function Home({ meetups }: Props) {
  return (
    <>
      {/* <Header /> */}
      <Headertest />
      <MeetupsList meetups={meetups} />
    </>
  );
}

const url = process.env.NEXTAUTH_URL + "/api/get-meetups";

export const getServerSideProps = async () => {
  const {data} = await axios({
    url: url,
    // url: url,
    method: "GET",
  }) 

  return {
    props: {
      meetups: data,
    }
  }
}


export default Home;
