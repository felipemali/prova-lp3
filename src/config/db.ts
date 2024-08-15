import { connect, connection } from "mongoose";
//prova-felipee
export const connectToDB = async () => {
  await connect("mongodb://localhost:27017/shows");
};

connection.on("connected", () => {
  console.log(`App connected to database ${connection.db.databaseName}`);
});
//prova-felipe
