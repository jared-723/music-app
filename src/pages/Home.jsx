import { useEffect } from "react";
import { SearchIcon } from "../components/shared/icons";
import { axiosMusic } from "../config/axios.congif";
import { useUserInfo } from "../store/userInfo";

const Home = () => {
  const{token} = useUserInfo((state => state.user))

  useEffect(() => {
    const config = {
      headers : {
        Authorization: `JWT ${token}`
      }
    }

    axiosMusic.get("/api/tracks/recommendations?seed_genres=reggaeton", config)
    .then(({data}) => console.log(data))
    .catch((err) => console.log(err))
  },[])

  useEffect(() => {
    const config = {
      headers : {
        Authorization: `JWT ${token}`
      }
    }

    axiosMusic.get("/api/genres", config)
    .then(({data}) => console.log(data))
    .catch((err) => console.log(err))
  })
  return (
    <ContainerMusic>
      <header className="text-lg p-4">
        <form className="bg-purple-dardk p-2 rounded-md flex gap-2">
          <button>
            <SearchIcon />
          </button>
          <input
            className="bg-transparent flex-1 outline-none"
            type="text"
            size={10}
            placeholder="Buscar"
          />
          <select className="bg-transparent outline-none" value="10">
            10
          </select>
        </form>
      </header>
    </ContainerMusic>
  );
};
export default Home;
