// React
import PropTypes from "prop-types";

// Music
import useSound from "use-sound";

// Redux
import { useSelector, useDispatch } from "react-redux";

/*

One howler instance, with all songs loaded in
Music Player is controlled by redux?
Or the music player is in redux?

We need to know index of each one, and how we want to sort them (props) (behaviour of 'skip next')

Don't assign and index to raps with empty mp3

Maybe use redux to assign title + howler to array


*/

const MusicPlayer = () => {
  const dipatch = useDispatch();
  const playlist = useSelector((state) => state.music.raps)
    .filter((x) => x.mp3 != null)
    .map((x) => x.mp3); // gets all the mp3's from rapData,

  const [play, exposedData] = useSound(playlist);

  return <div>{console.log(playlist)}</div>;
};

MusicPlayer.propTypes = {};

export default MusicPlayer;
