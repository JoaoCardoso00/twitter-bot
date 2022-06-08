import { rwClient } from "./twitterClient";
import axios from "axios";
import sunTzu from "sun-tzu-quotes";

const tweet = async () => {
  try {

    await rwClient.v2.tweet(`"${sunTzu()}" - Sun Tzu, The Art of War`);

  } catch (err) {
    console.log(err);
  }
};

// setInterval(yourFunction, 1000 * 60 * 60);

tweet();
