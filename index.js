module.exports.alldown = (url) => 
  new Promise(async (resolve, reject) => {
    const { alldown } = require("nayan-media-downloader");

    try {
      const { data, msg } = await alldown(url);

      resolve({
        status: true,
        dev: "SM-SOAD",
        devfb: "https://www.facebook.com/toxic71soad?mibextid=ZbWKwL",
        devwp: "01613924631", 
        data: data || msg,
      });
    } catch (error) {
      reject({ 
        status: false, 
        error: error.message || "An unexpected error occurred" 
      });
    }
  });
