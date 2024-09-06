/* import React from "react";
import { ButtonComp } from "../components/ButtonComp";
import { FormInputComp } from "../components/FormInputComp";
import "./log-in-page.css";
import { Link, useNavigate } from "react-router-dom";
import { useLogInUser } from "../hooks/useLogInUser";

export function LogInPage(props) {
  const navigate = useNavigate();
  const logIn: any = useLogInUser();

  const HandleLogIn = async (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;
    const passValue = e.target.pass.value;

    try {
      await logIn(emailValue, passValue);
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }

    const logInData = logIn(emailValue, passValue);
    console.log("logInData: ", logInData);
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

import React from "react";
import { ButtonComp } from "../components/ButtonComp";
import { FormInputComp } from "../components/FormInputComp";
import "./log-in-page.css";
import { Link, useNavigate } from "react-router-dom";
import { useLogInUser } from "../hooks/useLogInUserNew";

export const LogInPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, logIn } = useLogInUser();

  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValue = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const passValue = (
      e.currentTarget.elements.namedItem("pass") as HTMLInputElement
    ).value;

    const logInData = await logIn(emailValue, passValue);
    console.log("LogInData: ", logInData);

    if (logInData) {
      navigate("/dashboard"); // Redirige a la página principal si el login es exitoso.
    } else {
      alert("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="general-container">
      <h1 className="log-in-main-title">Iniciar sesión</h1>
      <p className="paragraph-01">
        Ingresá los siguientes datos para iniciar sesión
      </p>
      <form className="login-form" onSubmit={handleLogIn}>
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
};
