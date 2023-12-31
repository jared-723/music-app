import { Link } from "react-router-dom";
import { AddIcon, IconPlay } from "./icons";

const TrackDefaultCard = ({ track }) => {
  return (
    <article className="flex items-center gap-2 hover:bg-white/30 p-1 rounded-md pr-2">
      <header className="rounded-md overflow-hidden">
        <img src={track.album.images[2].url} alt="" />
      </header>
      <section className="flex-1 text-sm sm-text-base">
        <Link to={`/tracks/${track.id}`} className="font-semibold line-clamp-1">{track.name}</Link>
        <Link to={`/artists/${track.artists[0].id}`} className="text-slate-400 font-light">{track.artists[0].name}</Link>
      </section>
      <section>
        <button className="group">
          <IconPlay />
        </button>
        <button className="group">
          <AddIcon />
        </button>
      </section>
    </article>
  );
};
export default TrackDefaultCard;
