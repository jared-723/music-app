import { Link } from "react-router-dom";
import { LogOutIcon, PlayIcon, PlaylistIcon } from "../shared/icons";
import { useUserInfo } from "../../store/userInfo";
import { useState } from "react";

const PrincipalLayout = ({ children }) => {
  const [isShowAuthOptions, setIsShowAuthOptions] = useState(false)
  const logout = useUserInfo((state = state.logout));
  return (
    <section
      className="min-h-screen font-urbanist bg-purple-bg text-white 
    bg-[url(/img/bg-auth-mobile.png)] bg-right-bottom bg-no-repeat sm:bg-[url(/img/bg-auth-desktop.png)] overflow-hidden"
    >
      <header className="flex p-2 justify-between items-center bg-purple-bg sm:text-lg relative">
        <h1 className="uppercase">Git Music</h1>

        <section
          className="flex gap-4 [&>button]:uppercase [&>button]:border-[1px] 
          [&>button]:py-1 [&>button]:px-2 [&>button]:text-sm [&>button]:rounded-full
          [&>button]:font-semibold [&>button]:border-yellow-border"
        >
          <button onClick={() => setIsShowAuthOptions(!isShowAuthOptions)}className="hover:bg-purple-light ">Mi cuenta</button>
          <button className="flex gap-3 sm:gap-2 items-center hover:bg-purple-light">
            {/* <img src="/img/playlist-icon.svg" alt="" /> */}
            <PlaylistIcon />
            <span className="hidden sm:inline">Grabando</span>
          </button>
        </section>
        {/*Popup auth*/}
        <article
          className={`absolute -bottom-4 translate-y-full grid bg-purple-light p-4 gap-2 rounded-lg 
          border border-yellow-border transition-[right] ${isShowAuthOptions ? "right-4" : "-right-full"}`}
        >
          <Link to={"/playlists"}className="flex gap-2 items-center uppercase font-semibold hover:text-yellow-border group">
            <PlayIcon />
            Mis grabaciones
          </Link>
          <button
            onClick={logout}
            className="flex gap-2 items-center uppercase font-semibold 
            hover:text-yellow-border group"
          >
            <LogOutIcon />
            Cerras sesion
          </button>
        </article>
      </header>
      <section className="flex justify-center items-center pt-10">
        {children}
      </section>
    </section>
  );
};
export default PrincipalLayout;
