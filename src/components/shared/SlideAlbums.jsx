import {Swiper, SwiperSlide} from "swiper/react"

const SlideAlbums = ({albums}) => {
  return (
    <Swiper spaceBetween={10}
    breakpoints={{
      0:{
        slidesPerView: 2,
        spaceBetween: 15
      },
      500:{
        slidesPerView: 3,
        spaceBetween: 15
      }

    }}>
      {
        albums.map((album) => <SwiperSlide key={album.id}>
          <article>
            <header className="rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover" src={album.images[1].url} alt="" />
            </header>
            <h4 className="font-semibold">{album.name}</h4>
            <h5 className="font-light text-slate-400">{album.artists[0].name}</h5>
          </article>
        </SwiperSlide>)
      }
    </Swiper>
  )
}
export default SlideAlbums