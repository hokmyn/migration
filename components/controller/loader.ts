import Options from '../utils/Options';
import { IData } from '../utils/IData';
import { Endpoints } from '../utils/Enums';
import { Methods } from '../utils/Enums';

class Loader {
  baseLink: string;
  options: { [key: string]: string };

  constructor(baseLink: string, options: { [key: string]: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint = Endpoints.everything, options = {} },
    callback: (data: IData) => void = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load(Methods.get, endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`
        );
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Options, endpoint: Endpoints) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  load(
    method: Methods,
    endpoint: Endpoints,
    callback: (data: IData) => void,
    options = {}
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: IData) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
