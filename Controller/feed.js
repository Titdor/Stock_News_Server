const timeStamp = require("../models/timeStamp");
const axios = require("axios");
const newsData = require("../models/newsData");
const BezingaNewsArticles = require("../models/bezingaNewsData");
//API_KEY_BEZINGA:4057aec0766c487a834bcd7b7de5dff6;
//API_KEY_TIINGO: 2b72429e966146be047ab0f471e223777431c9d2;

exports.getPosts = async (req,res,next) => {
      const latestTimeDate = await newsData.findOne().sort({createdAt:-1});
      res.json(latestTimeDate);
   
};

exports.createPost = async (req,res,next) => {
      const timePosted = new timeStamp({
        time: req.body.timeEnterIsPressed
      });
      timePosted.save();
      // const latestTimeDate = await timeStamp.findOne().sort({createdAt:-1});
      // const secondLatestTimeDate = await timeStamp.aggregate([ { $sort: {"createdAt": -1}},
      //     { $limit: 2},
      //     { $sort: {"createdAt": 1}},
      //     { $limit: 1}
      // ]);
      const data = await timeStamp.find().limit(2).sort({ "_id": -1 });  
          // const latestDate = new Date(latestTimeDate.createdAt);
          // const postDate = new Date(secondLatestTimeDate[0].createdAt);
          const latestDate = new Date(data[0].createdAt);
          const postDate = new Date(data[1].createdAt);
          console.log (latestDate);
          console.log(postDate);
           if(-15<= latestDate.getMinutes() - postDate.getMinutes() <= 15 && latestDate.getHours() - postDate.getHours() === 0 && latestDate.getDay() - postDate.getDay() === 0 && latestDate.getMonth() - postDate.getMonth() === 0 && latestDate.getFullYear() - postDate.getFullYear() === 0 ) {
              console.log("Its less than 15 minutes");
              console.log(-15<= latestDate.getMinutes() - postDate.getMinutes() <= 15 && latestDate.getHours() - postDate.getHours() === 0 && latestDate.getDay() - postDate.getDay() === 0 && latestDate.getMonth() - postDate.getMonth() === 0 && latestDate.getFullYear() - postDate.getFullYear() === 0);
          } else {
              console.log("Its 15 minutes and more");
              const word = req.body.search
              console.log(word);
              await axios.get(`https://api.marketaux.com/v1/news/all?search=${word}&language=en&sort=published_at&api_token=XU3O28ATh4rbMuVI7TVuT7gtVMa9fr7mvxwu2eH9`)
              .then(result => {
                console.log(result.data.data);
                const news = new newsData({
                  data: result.data.data
                });
                news.save();
                res.send(news);
              });
            }  
          }
   


exports.getDailyPost = async (req,res,next) => {
  await axios.get(`https://api.marketaux.com/v1/news/all?language=en&sort=published_at&api_token=XU3O28ATh4rbMuVI7TVuT7gtVMa9fr7mvxwu2eH9`)
  .then(result => {
    const dailyNews = new newsData({
      data: result.data.data
    });
    dailyNews.save();
    res.send(dailyNews);
  })
  
}

exports.createBezingaPost = async (req,res,next) => {
  const word = req.body.search
  await axios.get(`https://api.benzinga.com/api/v2/news?page=1&pageSize=3&displayOutput=abstract&sort=created%3Adesc&topics=google&token=4057aec0766c487a834bcd7b7de5dff6`)
  .then(results => { console.log(results.data);
    const bezingaNews = new BezingaNewsArticles({
      data: results.data
    })
    bezingaNews.save();
    res.send(bezingaNews);
  });
}

exports.getBezingaPost = async (req,res,next) => {
  const latestTimeDate = await timeLastUpdate.findOne().sort({createdAt:-1});
  res.json(latestTimeDate);
}
