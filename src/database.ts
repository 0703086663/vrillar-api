import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://admin:admin@vrillarcluster.ohvm8oq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((db) => console.log("[database]: Database is connected"))
  .catch((err) => console.log(err));
