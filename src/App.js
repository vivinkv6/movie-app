import { useEffect, useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularMovie from './pages/PopularMovie';
import UpcomingMovie from './pages/UpcomingMovie';
import TopRatedMovie from './pages/TopRatedMovie';
import NowPlayingMovie from './pages/NowPlayingMovie';
import NotFound from './pages/NotFound';
import SearchMovie from './pages/SearchMovie';

function App() {

  const [query, setQuery] = useState('thor');

  const [populars, setPopulars] = useState([]);
  const [upcomings, setUpcomings] = useState([]);
  const [top_rateds, setTop_rated] = useState([]);
  const [now_playings, setNow_playing] = useState([]);
  const[about,setAbout]=useState(0);


  
  const fetchData = async () => {
    const upcoming = (await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)).data.results;
    const popular = (await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)).data.results;
    const now_playing = (await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`)).data.results;
    const top_rated = (await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)).data.results;
    
    setUpcomings(upcoming);
    setPopulars(popular);
    setNow_playing(now_playing);
    setTop_rated(top_rated);


  }


  useEffect(() => {

    fetchData();
  }, [])


  return (
    <>


      <BrowserRouter>
        <div className="fixed-top">
          <NavBar query={query} setQuery={setQuery} />
        </div>
        <Routes>
          <Route  path="/" element={<NowPlayingMovie populars={now_playings} about={about} setAbout={setAbout}/>} />
          <Route path="popular" element={<PopularMovie populars={populars} about={about} setAbout={setAbout}/>} />
          <Route path="upcoming" element={<UpcomingMovie populars={upcomings} about={about} setAbout={setAbout}/>} />
          <Route path="toprated" element={<TopRatedMovie populars={top_rateds} about={about} setAbout={setAbout}/>} />
          <Route path="search" element={<SearchMovie apikey={process.env.REACT_APP_API_KEY} query={query} about={about} setAbout={setAbout}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <>
       
      
      </>


      {/* 
      <Cards type={populars} title="Popular"/>
     
      <Cards type={upcomings} title="Upcoming"/>
       
      <Cards type={now_playings} title="Now Playing"/>
      
      <Cards type={top_rateds} title="Top Rated"/>
     */}


    </>
  );
}

export default App;
