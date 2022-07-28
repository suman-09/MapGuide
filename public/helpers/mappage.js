const axios = require('axios');

//wikimedia api
async function fetchWikiExtract(param) {
    const wikiEndpoint = 'https://en.wikipedia.org/w/api.php';
    const wikiParams = '?action=query'
    + "&prop=extracts"
    + "&exsetences=1"
    + "&exlimit=1"
    + "&titles=" + param
    + "&explaintext=1"
    + "&format=json"
    + "&formatversion=2"
    + "&origin=*";
  
    const wikiLink = wikiEndpoint + wikiParams
  
    var wikiconfig = {
      timeout: 65000000
    };
    
    const data = await axios.get(wikiLink, wikiconfig);
    // for (let i = 0; i < 700; i++) {
    //   console.log(data.data.query.pages[0].extract[i]); 
    // }
    //console.log(data.data.query.pages[0].extract);

  };

module.exports={ fetchWikiExtract };  