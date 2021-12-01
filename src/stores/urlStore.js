import { makeObservable, observable, action, computed } from "mobx";
import axios from "axios";

export default class UrlStore {
  longUrl;
  shortenedUrl;

  constructor() {
    this.longUrl = "";
    this.shortenedUrl = "";

    makeObservable(this, {
      longUrl: observable,
      shortenedUrl: observable,
      setLongUrl: action,
      setShortenedUrl: action,
      requestShortenedUrl: action,
    });
  }

  setLongUrl = (url) => {
    this.longUrl = url;
  };

  setShortenedUrl = (url) => {
    this.shortenedUrl = url;
  };

  requestShortenedUrl = async (successMsg, failMsg) => {
    try {
      const res = await axios.get("http://localhost:3031/getURL", {
        params: {
          url: this.longUrl,
        },
      });
      if (res && res.status === 200) {
        const { data } = res;
        this.shortenedUrl = data.result.url;
        navigator.clipboard.writeText(data.result.url);
        successMsg();
      }
    } catch (e) {
      this.shortenedUrl = "";
      failMsg();
    }
  };
}
