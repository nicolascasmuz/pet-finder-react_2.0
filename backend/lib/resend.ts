import { Resend } from "resend";

const resend = new Resend(process.env.REACT_APP_RESEND_KEY);

export { resend };
