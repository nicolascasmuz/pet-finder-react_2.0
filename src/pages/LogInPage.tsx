import React, { useEffect, useRef } from "react";
import { ButtonComp } from "../components/ButtonComp";
import { FormInputComp } from "../components/FormInputComp";
import "./log-in-page.css";
import { Link } from "react-router-dom";
import { useLogIn } from "../hooks/useLogIn";
import { useLogOut } from "../hooks/useLogOut";

function LogInPage() {
  const logOut = useLogOut();
  useEffect(() => {
    logOut();
  }, []);

  const logIn = useLogIn();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passInputRef = useRef<HTMLInputElement>(null);
  const wrongDataRef = useRef<HTMLSpanElement>(null);

  const HandleLogIn = async (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;
    const passValue = e.target.pass.value;
    if (emailValue && passValue) {
      try {
        await logIn(emailValue, passValue);
      } catch (error) {
        emailInputRef.current.style.border = "solid 3px #EA2027";
        passInputRef.current.style.border = "solid 3px #EA2027";
        wrongDataRef.current.style.display = "block";
        console.error("Error al iniciar sesión: ", error);
      }
    } else if (!emailValue && passValue) {
      emailInputRef.current.style.border = "solid 3px #EA2027";
      passInputRef.current.style.border = "solid 1px #b2bec3";
    } else if (emailValue && !passValue) {
      emailInputRef.current.style.border = "solid 1px #b2bec3";
      passInputRef.current.style.border = "solid 3px #EA2027";
    } else if (!emailValue && !passValue) {
      emailInputRef.current.style.border = "solid 3px #EA2027";
      passInputRef.current.style.border = "solid 3px #EA2027";
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
          ref={emailInputRef}
        />
        <FormInputComp
          className="input2"
          type={"password"}
          name={"pass"}
          textContent={"CONTRASEÑA"}
          ref={passInputRef}
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

export { LogInPage };
