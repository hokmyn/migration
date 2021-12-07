import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://newsapi.org/v2/", {
      apiKey: "6ae2f75f1b064d5999fa332931815c46", // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
