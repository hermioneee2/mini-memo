const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/getURL", async function (req, res) {
  let urlquery = encodeURI(req.query.url);
  let reqOptions = {
    params: { url: urlquery },
    headers: {
      "X-Naver-Client-Id": "1vzm3M9r_K8J13kBWkQB",
      "X-Naver-Client-Secret": "lvZB0oGbAp",
    },
  };
  try {
    let URLRes = await axios.get(
      "https://openapi.naver.com/v1/util/shorturl.json",
      reqOptions
    );
    return res.json(URLRes.data);
  } catch (e) {
    return res.json({
      status: 400,
      message: e,
      urlquery: urlquery,
    });
  }
});

module.exports = router;
