import axios from "axios";

export const LoginService = {
  login: async (correo, contraseña) => {
    const usuario = {
      email: correo,
      password: contraseña,
    };

    const response = await axios.post(
      "https://apitechriders.azurewebsites.net/api/Auth/Login",
      usuario,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
      console.log(response.data);
      window.localStorage.setItem("token", response.data.response);
      
  },

  logout: async () => {
    // Eliminar token de localstorage
    window.localStorage.removeItem("token");
  },
};
export default  LoginService;