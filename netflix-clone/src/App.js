import './App.css';
import Row from './Row.js'
import AllUrl from './requests.js'
import Banner from './Banner';
import NavBar from './Navbar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={ AllUrl.fetchNetflixOriginals } isLargeRow/>
      <Row title="Trending Now" fetchUrl={ AllUrl.fetchTrending }/>
      <Row title="Top Rated" fetchUrl={ AllUrl.fetchTopRated }/>
      <Row title="Action Movies" fetchUrl={ AllUrl.fetchActionMovies }/>
      <Row title="Comedy Movies" fetchUrl={ AllUrl.fetchComedyMovies }/>
      <Row title="Horror Movies" fetchUrl={ AllUrl.fetchHorrorMovies }/>
      <Row title="Romance Movies" fetchUrl={ AllUrl.fetchRomanceMovies }/>
      <Row title="Documentaries" fetchUrl={ AllUrl.fetchDocumentaries }/>
    </div>
  );
}

export default App;
