import {FaPauseCircle, FaPlayCircle} from "react-icons/all";

const PlayPause = ({
                       isPlaying, handlePause, handlePlay, activeSong, song
                   }) => (isPlaying && activeSong?.title === song.title ?
    (<FaPauseCircle
    size={60}
    className="text-gray-300 "
    onClick={handlePause}
    />)
    :
    (<FaPlayCircle
        size={60}
        className="text-gray-300 "
        onClick={handlePlay}
    />));

export default PlayPause;
