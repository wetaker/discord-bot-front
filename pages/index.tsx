import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import BarGraph from "../components/graph/BarGraph";
import UserSearch from "../components/UserSearch";
import MainNav from "../components/MainNav";

const tags = ["John#4321", "Xavier#3280", "ASDF#1234", "bad#1234"];
const heights = [20, 50, 60, 200];
let data: Array<[string, number]> = tags.map((tag, i) => {
  return [tag, heights[i]];
});
console.log(data)

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <UserSearch></UserSearch>
        <BarGraph></BarGraph>
      </main>
    </div>
  );
};

export default Home;
