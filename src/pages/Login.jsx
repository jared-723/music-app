import { Link, useNavigate } from "react-router-dom";
import ContainerAuth from "../components/layout/ContainerAuth";
import { axiosMusic } from "../config/axios.congif";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);

    axiosMusic
      .post("/api/auth/login", data)
      .then(({ data }) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <ContainerAuth>
      <header className="hidden sm:block sm:max-w-[350px]">
        <img src="/img/login-header.png" alt="" />
      </header>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 w-[min(100%,_350px)] sm:w-[300px]"
      >
        <h2 className="uppercase font-semibold text-2xl">Iniciar sesion</h2>

        <div className="grid gap-4">
          <label className="text-white/50 text-sm" htmlFor="email">
            Correo
          </label>
          <input
            className="bg-transparent outline-none border-b border-yellow-border p-1"
            id="email"
            type="email"
            name="email"
          />
        </div>
        <div className="grid gap-4">
          <label className="text-white/50 text-sm" htmlFor="password">
            Contraseña
          </label>
          <input
            className="bg-transparent outline-none border-b border-yellow-border p-1"
            id="password"
            type="password"
            name="password"
          />
        </div>

        <button className="bg-purple-light uppercase font-semibold max-w-max mx-auto px-6 py-1 rounded-full">
          Entrar
        </button>
        <Link className="text-center text-sm underline" to="/auth/register">
          O icrear una cuenta nueva
        </Link>
      </form>
    </ContainerAuth>
  );
};
export default Login;
