const express = require("express");
const axios = require("axios");
const router = express.Router();

// router.get("/getURL", async function (req, res) {
//   let url = req.url;
//   let reqOptions = {
//     headers: {
//       "X-Naver-Client-Id": "1vzm3M9r_K8J13kBWkQB",
//       "X-Naver-Client-Secret": "lvZB0oGbAp",
//     },
//     options: {
//       url: url,
//     },
//   };
//   try {
//     let URLRes = await Axios.get(
//       "https://openapi.naver.com/v1/util/shorturl.json",
//       reqOptions
//     );
//     return res.json(URLRes.data);
//   } catch (e) {
//     print("here!");
//     return res.json({
//       status: 400,
//       message: e,
//     });
//   }
// });

router.get("/getURL", async function (req, res) {
  let urlquery = encodeURI(req.query.url);
  // let urlquery = encodeURI("www.google.com");
  let reqOptions = {
    // url: "https://openapi.naver.com/v1/util/shorturl.json",
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
  // res.send("success");
});

// router.get("/getURL", function (req, res) {
//   var api_url = "https://openapi.naver.com/v1/util/shorturl";
//   var request = require("request");
//   var query = encodeURI("https://developers.naver.com/docs/utils/shortenurl");
//   var options = {
//     url: api_url,
//     form: { url: query },
//     headers: {
//       "X-Naver-Client-Id": "1vzm3M9r_K8J13kBWkQB",
//       "X-Naver-Client-Secret": "lvZB0oGbAp",
//     },
//   };
//   request.post(options, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
//       res.end(body);
//     } else {
//       res.status(response.statusCode).end();
//       console.log("error = " + response.statusCode);
//     }
//   });
// });

module.exports = router;
