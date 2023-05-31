import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {freeMode, navigation, pagination} from 'swiper';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import data from '../database/getTopCharts.json';

const TopPlay = () => {
  const dispatch = useDispatch();
  const {
    activeSong,
    isPlaying
  } = useSelector(state => state.player);
  const handlePauseClick = () => {

    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({
      song,
      data,
      i
    }));
    dispatch(playPause(true));
  };
  return (
    <div>
      TopPlay
    </div>

  );
};

export default TopPlay;
