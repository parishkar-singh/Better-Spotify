import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
// import { useGetTopChartsQuery } from '../redux/services/shazamCoreApi';
import data from '../database/getTopCharts.json';
import {useDispatch,useSelector} from "react-redux";
import { useState } from 'react';

const Discover = () => {
    const dispatch=useDispatch()
    const {activeSong,isPlaying}=useSelector((state)=>state.player)
    const {isFetching,setIsFetching}=useState(false)

  // const {isFetching,error}=useGetTopChartsQuery();
  // console.log(data);
if(isFetching) return <Loader title={'Loading Songs....'}/>

// if(error) return <Error/>
  const genreTitle = 'pop';
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">

        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        <select
          onChange={() => {
          }}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounder-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre)=><option value={genre.value} key={genre.value}>{genre.title}</option>)}

        </select>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8 '>
        {data?.map((song,i)=>(
          <SongCard
              key={song.key}
              song={song} i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
