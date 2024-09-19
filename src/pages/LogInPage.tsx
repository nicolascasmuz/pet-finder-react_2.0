import React from "react";
import { ButtonComp } from "../components/ButtonComp";
import { FormInputComp } from "../components/FormInputComp";
import "./log-in-page.css";
import { Link, useNavigate } from "react-router-dom";
import { useLogInUser } from "../hooks/useLogInUser";

export function LogInPage() {
  const navigate = useNavigate();
  const logIn = useLogInUser();

  const HandleLogIn = async (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;
    const passValue = e.target.pass.value;

    try {
      await logIn(emailValue, passValue);
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
    }
    /* try {
      const logInData = await logInHook(emailValue, passValue);
      console.log("logInData page: ", logInData);
      if (logInData) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    } */
  };

  return (
    <div className="general-container">
      <h1 className="log-in-main-title">Iniciar sesión</h1>
      <p className="paragraph-01">
        Ingresá los siguientes datos para iniciar sesión
      </p>
      <form className="login-form" onSubmit={HandleLogIn}>
        <FormInputComp
          className="input1"
          type={"email"}
          name={"email"}
          textContent={"EMAIL"}
        />
        <FormInputComp
          className="input2"
          type={"password"}
          name={"pass"}
          textContent={"CONTRASEÑA"}
        />
        <p className="paragraph-02">
          ¿Aún no estás registrado?{" "}
          <Link to="/sign-up" className="login-link">
            Registrarse.
          </Link>
        </p>
        <div className="button-next">
          <ButtonComp color="#ff7f87" textContent={"Siguiente"} />
        </div>
      </form>
    </div>
  );
}

/* import React from "react";
import { ButtonComp } from "../components/ButtonComp";
import { FormInputComp } from "../components/FormInputComp";
import "./log-in-page.css";
import { Link, useNavigate } from "react-router-dom";
import { useLogInUser } from "../hooks/useLogInUser_ai";

export function LogInPage() {
  const navigate = useNavigate();
  const logIn = useLogInUser();

  const HandleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailValue = (e.target as any).email.value;
    const passValue = (e.target as any).pass.value;

    const user = await logIn(emailValue, passValue);

    if (user) {
      console.log("Usuario autenticado:", user);
      navigate("/home"); // Redirige a la página de inicio u otra página después de loguearse
    } else {
      console.error("Error al iniciar sesión");
    }
  };

  return (
    <div className="general-container">
      <h1 className="log-in-main-title">Iniciar sesión</h1>
      <p className="paragraph-01">
        Ingresá los siguientes datos para iniciar sesión
      </p>
      <form className="login-form" onSubmit={HandleLogIn}>
        <FormInputComp
          className="input1"
          type={"email"}
          name={"email"}
          textContent={"EMAIL"}
        />
        <FormInputComp
          className="input2"
          type={"password"}
          name={"pass"}
          textContent={"CONTRASEÑA"}
        />
        <p className="paragraph-02">
          ¿Aún no estás registrado?{" "}
          <Link to="/sign-up" className="login-link">
            Registrarse.
          </Link>
        </p>
        <div className="button-next">
          <ButtonComp color="#ff7f87" textContent={"Siguiente"} />
        </div>
      </form>
    </div>
  );
} */
