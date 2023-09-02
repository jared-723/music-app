import { useEffect, useState } from "react";
import { SearchIcon } from "../components/shared/icons";
import { axiosMusic } from "../config/axios.congif";
import { useUserInfo } from "../store/userInfo";
import TrackDefaultCard from "../components/shared/TrackDefaultCard";
import ListTracksDefault from "../components/shared/ListTracksDefault";

const Home = () => {
  const [tracksRecommendations, setTracksRecommendations] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target["home_querySearch"].value;
    if(query=== "") return setSearchResults([])
    axiosMusic.get(`/api/tracks?limit=1&q=${query}`)
    .then(({data}) => setSearchResults(data.tracks.items))
    .catch((err) => console.log(err))
  }

  const tracksToShow = searchResults.length === 0 ? tracksRecommendations : searchResults

  useEffect(() => {

    axiosMusic.get("/api/tracks/recommendations?seed_genres=reggaeton", config)
    .then(({data}) => setTracksRecommendations(data.tracks))
    .catch((err) => console.log(err))
  },[])

  // useEffect(() => {

  //   axiosMusic.get("/api/genres", config)
  //   .then(({data}) => console.log(data))
  //   .catch((err) => console.log(err))
  // })
  return (
    <ContainerMusic>
      <header className="text-lg p-4">
        <form onSubmit={handleSubmit} className="bg-purple-dardk p-2 rounded-md flex gap-2">
          <button>
            <SearchIcon />
          </button>
          <input
            id="home-querySearch"
            className="bg-transparent flex-1 outline-none"
            type="text"
            size={10}
            placeholder="Buscar"
            autoComplete="off"
          />
          <select className="bg-transparent outline-none" value="10">
            10
          </select>
        </form>
      </header>
      <ListTracksDefault tracks={tracksToShow}/>
    </ContainerMusic>
  );
};
export default Home;
