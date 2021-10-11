// Songs

import Rollie from "../public/rollie.jpeg";
import Rolex from "../public/rolex.jpg";

const getRap = (name) =>
  `https://github.com/ThePickleGawd/portfolio/blob/main/public/audio/raps/${name}.mp3?raw=true`;

const DylanDrip = getRap("DylanDrip");
const BlackIceOnMyDrip = getRap("BlackIceOnMyDrip");
const DroppingAnOpp = getRap("DroppingAnOpp");
const RanUpWithAGlock = getRap("RanUpWithAGlock");
const RolliesForTheHomies = getRap("RolliesForTheHomies");
const SaiyanGawdFlow2 = getRap("SaiyanGawdFlow2");
const SaiyanGawdFlow3 = getRap("SaiyanGawdFlow3");

export const raps = [
  {
    title: "Rollies for the Homies",
    description: "Super Saiyan Gawd",
    img: Rollie,
    embedId: "a5eDbFbrxN4",
    mp3: RolliesForTheHomies,
    fire: 5,
    date: new Date(2021, 1, 25), // year, month, day
  },
  {
    title: "Ran Up With a Glock",
    description: "Super Saiyan Gawd",
    img: null,
    embedId: "0-S5a0eXPoc",
    mp3: RanUpWithAGlock,
    fire: 3,
    date: new Date(2021, 1, 25), // year, month, day
  },
  {
    title: "Black Ice on My Drip",
    description: "Super Saiyan Gawd",
    img: null,
    youtube: "https://youtube.com",
    mp3: BlackIceOnMyDrip,
    fire: 2,
    date: new Date(2021, 1, 25), // year, month, day
  },
  {
    title: "Saiyan Gawd Flow",
    description: "Super Saiyan Gawd",
    img: null,
    youtube: "https://youtube.com",
    fire: 2,
    date: new Date(2021, 1, 25), // year, month, day
  },
  {
    title: "Saiyan Gawd Flow 2",
    description: "The Pickle Gawd",
    img: null,
    youtube: "https://youtube.com",
    mp3: SaiyanGawdFlow2,
    fire: 5,
    date: new Date(2021, 2, 9), // year, month, day
  },
  {
    title: "Saiyan Gawd Flow 3",
    description: "The Pickle Gawd",
    img: null,
    youtube: "https://youtube.com",
    mp3: SaiyanGawdFlow3,
    fire: 2,
    date: new Date(2021, 2, 28), // year, month, day
  },
  {
    title: "SAT's and the 223's",
    description: "The Pickle Gawd",
    img: null,
    youtube: "https://youtube.com",
    fire: 3,
    date: new Date(2021, 2, 22), // year, month, day
  },
  {
    title: "Dropping an Opp",
    description: "The Pickle Gawd",
    img: null,
    youtube: "https://youtube.com",
    mp3: DroppingAnOpp,
    fire: 4,
    date: new Date(2021, 8, 22), // year, month, day
  },
  {
    title: "HWBounty Rap???",
    description: "Ad Raps",
    img: null,
    youtube: "https://youtube.com",
    fire: 0,
    date: new Date(2021, 3, 7), // year, month, day
  },
  {
    title: "Throw Gun",
    description: "Ad Raps",
    img: null,
    youtube: "https://youtube.com",
    fire: 0,
    date: new Date(2021, 1, 18), // year, month, day
  },
  {
    title: "Dylan Drip",
    description: "Autotune???",
    img: null,
    youtube: "https://youtube.com",
    mp3: DylanDrip,
    fire: 4,
    date: new Date(2021, 9, 29), // year, month, day
  },
];

export default raps;
