import axios from 'axios'

export let apiTwitch = 
    axios.create({
      headers : {
        'Client-ID' : `vsr11pna78ii6rgag9h1ctb7hf7led`,
        'Authorization': 'Bearer er8g2swj2dtzm9x4y1n5m1uplg89bg',
      }
    }) 
  

  /*
    CLIENT_ID = 'vsr11pna78ii6rgag9h1ctb7hf7led';
    REDIRECT = 'http://127.0.0.1/';

    pour raffraichir le token met le lien en dessous dans la barre url et remplace l'ancien token par le nouveau que tu tu trouveras dans l'url juste devant le &scope

    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=vsr11pna78ii6rgag9h1ctb7hf7led&redirect_uri=https://localhost:5173/&response_type=token

*/