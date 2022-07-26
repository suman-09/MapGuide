const axios = require('axios');

//wikimedia api
async function fetchWikiExtract(param) {
    const wikiEndpoint = 'https://en.wikipedia.org/w/api.php';
    const wikiParams = '?action=query'
    + "&prop=extracts"
    +"&exsetences=1"
    + "&exlimit=1"
    + "&titles=" + param
    + "&explaintext=1"
    + "&format=json"
    + "&formatversion=2"
    + "&origin=*";
  
    const wikiLink = wikiEndpoint + wikiParams
  
    var wikiconfig = {
      timeout: 6500
    };
    
    //return wikiLink;
    const data = await axios.get(wikiLink, wikiconfig);
    console.log(data.data.query);

  };

module.exports={ fetchWikiExtract };  