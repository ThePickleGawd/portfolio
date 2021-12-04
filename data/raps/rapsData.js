// Lyrics
import BlackIceOnMyDripLyrics from "./rapLyrics/BlackIceOnMyDrip";
import DylanDripLyrics from "./rapLyrics/DylanDrip";
import RolliesForTheHomiesLyrics from "./rapLyrics/RolliesForTheHomies";
import DroppingAnOppLyrics from "./rapLyrics/DroppingAnOpp";
import StudyGangLyrics from "./rapLyrics/StudyGang";

// Meaning
import BlackIceOnMyDripMeaning from "./rapMeanings/BlackIceOnMyDrip";
import DylanDripMeaning from "./rapMeanings/DylanDrip";
import RolliesForTheHomiesMeaning from "./rapMeanings/RolliesForTheHomies";
import DroppingAnOppMeaning from "./rapMeanings/DroppingAnOpp";
import StudyGangMeaning from "./rapMeanings/StudyGang";

import Rollie from "../../public/rollie.jpeg";
import Rolex from "../../public/rolex.jpg";

const getRap = (name) =>
  `https://github.com/ThePickleGawd/portfolio/blob/main/public/audio/raps/${name}.mp3?raw=true`;

const RanUpWithAGlock = getRap("RanUpWithAGlock");
const BlackIceOnMyDrip = getRap("BlackIceOnMyDrip");
const RolliesForTheHomies = getRap("RolliesForTheHomies");
const SaiyanGawdFlow2 = getRap("SaiyanGawdFlow2");
const SaiyanGawdFlow3 = getRap("SaiyanGawdFlow3");
const DroppingAnOpp = getRap("DroppingAnOpp");
const DylanDrip = getRap("DylanDrip");
const StudyGang = getRap("StudyGang");

export const raps = [
  {
    title: "Throw Gun",
    description: "Ad Raps",
    img: null,
    youtube: "https://youtube.com",
    fire: 0,
    date: new Date(2021, 0, 18), // year, month (0-indexed), day
  },
  {
    title: "Ran Up With a Glock",
    description: "Super Saiyan Gawd",
    img: null,
    embedId: "0-S5a0eXPoc",
    mp3: RanUpWithAGlock,
    fire: 3,
    date: new Date(2021, 0, 25), // year, month (0-indexed), day
  },
  {
    title: "Rollies for the Homies",
    description: "Super Saiyan Gawd",
    img: Rollie,
    embedId: "a5eDbFbrxN4",
    mp3: RolliesForTheHomies,
    lyrics: RolliesForTheHomiesLyrics,
    meaning: RolliesForTheHomiesMeaning,
    fire: 5,
    date: new Date(2021, 0, 25), // year, month (0-indexed), day
  },
  {
    title: "Black Ice on My Drip",
    description: "Super Saiyan Gawd",
    img: null,
    youtube: "https://youtube.com",
    //mp3: BlackIceOnMyDrip,
    lyrics: BlackIceOnMyDripLyrics,
    meaning: BlackIceOnMyDripMeaning,
    fire: 1,
    date: new Date(2021, 0, 25), // year, month (0-indexed), day
  },
  {
    title: "Saiyan Gawd Flow",
    description: "Super Saiyan Gawd",
    img: null,
    youtube: "https://youtube.com",
    fire: 1,
    date: new Date(2021, 0, 25), // year, month (0-indexed), day
  },
  {
    title: "Saiyan Gawd Flow 2",
    description: "The Pickle Gawd",
    img: null,
    youtube: "https://youtube.com",
    mp3: SaiyanGawdFlow2,
    fire: 5,
    date: new Date(2021, 1, 9), // year, month (0-indexed), day
  },
  {
    title: "SAT's and the 223's",
    description: "The Pickle Gawd",
    img: null,
    youtube: "https://youtube.com",
    fire: 3,
    date: new Date(2021, 1, 22), // year, month (0-indexed), day
  },
  {
    title: "Saiyan Gawd Flow 3",
    description: "The Pickle Gawd",
    img: null,
    youtube: "https://youtube.com",
    mp3: SaiyanGawdFlow3,
    fire: 2,
    date: new Date(2021, 1, 28), // year, month (0-indexed), day
  },
  {
    title: "HWBounty Rap???",
    description: "Ad Raps",
    img: null,
    youtube: "https://youtube.com",
    fire: 0,
    date: new Date(2021, 2, 7), // year, month (0-indexed), day
  },
  {
    title: "Dropping an Opp",
    description: "The Pickle Gawd",
    img: null,
    youtube: "https://youtube.com",
    mp3: DroppingAnOpp,
    lyrics: DroppingAnOppLyrics,
    meaning: DroppingAnOppMeaning,
    fire: 4,
    date: new Date(2021, 7, 22), // year, month (0-indexed), day
  },
  {
    title: "Dylan Drip",
    description: "Autotune???",
    img: null,
    youtube: "https://youtube.com",
    mp3: DylanDrip,
    lyrics: DylanDripLyrics,
    meaning: DylanDripMeaning,
    fire: 3,
    date: new Date(2021, 8, 29), // year, month (0-indexed), day
  },
  {
    title: "Study (Toudie) Gang",
    description: "study.dylanlu.com (Music video soon)",
    img: null,
    youtube: "https://youtube.com",
    mp3: StudyGang,
    lyrics: StudyGangLyrics,
    meaning: StudyGangMeaning,
    fire: 5,
    date: new Date(2021, 11, 3), // year, month (0-indexed), day
  },
];

export default raps;
