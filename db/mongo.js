import mongoose from "mongoose";


export const dbConnect = () => {
  const DB_URI = process.env.DB_URI;  
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("**Conexion exitosa a la base de datos**");
  })
  .catch((err) => {
      console.log("**Error de conexion a la base de datos**", err);
  });
};
