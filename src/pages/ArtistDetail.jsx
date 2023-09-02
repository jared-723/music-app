import { useParams } from "react-router"
import ContainerMusic from "../components/layout/ContainerMusic"
import { useEffect, useState } from "react"
import { axiosMusic } from "../config/axios.congif"
import "swiper/css"
import SlideAlbums from "../components/shared/SlideAlbums"

const ArtistDetail = () => {
  const [artist, setArtist] = useState(null)

  const {id} = useParams()

  useEffect(() =>{
    axiosMusic.get(`/api/artists/${id}`)
    .then(({data}) => setArtist(data))
    .catch((err) => console.log(first))
  }, [])

  return (
    <ContainerMusic>
      <header>
        Info del artista
      </header>
      <section>
        <h3>Otros discos del artista</h3>
        <section>
          <SlideAlbums albums = {artist?.albums ?? []}/>
        </section>
      </section>
      <section>
        canciones relacionadas
      </section>
    </ContainerMusic>
  )
}
export default ArtistDetail