import axios from 'axios'

export let apiTwitch = 
    axios.create({
      headers : {
        'Client-ID' : `vsr11pna78ii6rgag9h1ctb7hf7led`,
        'Authorization': 'Bearer rto5b02w7ruokhb69feat2ub44i8an',
      }
    }) 
  

  /*
    CLIENT_ID = 'vsr11pna78ii6rgag9h1ctb7hf7led';
    REDIRECT = 'http://127.0.0.1/';

    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=vsr11pna78ii6rgag9h1ctb7hf7led&redirect_uri=https://localhost:5173/&response_type=token

*/