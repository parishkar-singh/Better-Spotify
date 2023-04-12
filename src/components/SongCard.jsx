import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice';

const SongCard = ({
                      song,
                      i,
                      isPlaying,
                      activeSong,
    data
                  }) => {
    // const activeSong = 'test';
    const dispatch=useDispatch()
    const handlePauseClick = () => {

        dispatch(playPause(false))
    }
    const handlePlayClick = () => {
        dispatch(setActiveSong({song,data,i}))
        dispatch(playPause(true))
    }
    return (
        <div
            className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 rounded-2xl backdrop-blur-sm animate-slideup rounded-lg ">
            <div className="rounded-2xl relative w-full h-56 group cursor-pointer hover:filter hover:blur-md transition duration-200 ease-in-out">
                <div className={` rounded-2xl absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex  
      ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70 transition duration-200 ease-in-out ' : 'hidden'}`}>
                    <PlayPause
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        handlePause={handlePauseClick}
                        handlePlay={handlePlayClick}
                    />
                </div>

                {/*hover:filter hover:blur-md transition duration-300 ease-in-out*/}
                <img className="rounded-2xl" src={song.images?.coverart} alt="song_img" />
            </div>
            <div className="mt-4 flex flex-col">
                <p className="font-semibold text-lg text-white truncate">
                    <Link to={`/songs/${song?.key}`}>
                        {song.title}
                    </Link>
                </p>
                <p className={"text-sm truncate text-gray-300 mt-1 "}>
                    <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artist'}>
                        {song.subtitle}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SongCard;
