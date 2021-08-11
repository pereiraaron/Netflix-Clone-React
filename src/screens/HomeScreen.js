import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Row from "../components/Row/Row";
import requests from "../requests";

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [userInfo, history]);

  return (
    <div>
      <Navbar />
      <Banner url={requests.getTrending} />
      <Row title="Popular" url={requests.getPopular} isLargeRow={true} />
      <Row title="Trending" url={requests.getTrending} />
      <Row title="Netflix Originals" url={requests.getNetflixOriginals} />
      <Row title="Top Rated" url={requests.getTopRated} />
      <Row title="Crime " url={requests.getCrime} />
      <Row title="Comedy " url={requests.getComedy} />
      <Row title="Action" url={requests.getAction} />
    </div>
  );
};

export default HomeScreen;
