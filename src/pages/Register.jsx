import { Link, Navigate, useNavigate } from "react-router-dom";
import ContainerAuth from "../components/layout/ContainerAuth";
import { axiosMusic } from "../config/axios.congif";

const Register = () => {
  const navigate = useNavigate()

  const handleSubmit =(e) =>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    axiosMusic.post("/api/auth/register", data)
    .then(({data})=> {
      navigate("/auth/login");
      alert("Usuario creado correctamente. Ahora realiza el login para ingresar");
    })
    .catch((err)=> console.log(err))
  }
  

  return (
    <ContainerAuth>
      <header className="hidden sm:block sm:max-w-[350px]">
        <img src="/img/register-header.png" alt="" />
      </header>

      <form onSubmit={handleSubmit} className="grid gap-6 w-[min(100%,_350px)] sm:w-[300px]">
        <h2 className="uppercase font-semibold text-2xl">Cuenta nueva</h2>

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
          <label className="text-white/50 text-sm" htmlFor="userName">
            Nombre de usuario
          </label>
          <input
            className="bg-transparent outline-none border-b border-yellow-border p-1"
            id="userName"
            type="text"
            name="name"
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
          Crear
        </button>
        <Link className="text-center text-sm underline" to="/auth/login">
          O iniciar sesión
        </Link>
      </form>
    </ContainerAuth>
  );
};
export default Register;
