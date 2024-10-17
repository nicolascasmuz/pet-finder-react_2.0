import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.REACT_APP_ELEPHANTSQL_URL);
