import config from "./utils/config";
import app from "./app";
import connectToDatabase from "./services/database";

const main = async () => {
  await connectToDatabase();
  app.listen(config.PORT, () =>
    console.log("Server running on port", config.PORT)
  );
};

main();
