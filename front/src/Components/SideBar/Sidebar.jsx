import { useEffect, useState } from "react";
import { apiTwitch } from "../../api/api";

export const SideBar = () => {
    const [ topStreams, setTopStreams ] = useState([])

    useEffect(() => {

        const fetchData = async ()  => {

           const result = await apiTwitch.get('https://api.twitch.tv/helix/streams')

           const arrayData = result.data.data;
           // console.log(arrayData);

           const gameIDs = arrayData.map((id) => {
            return id.game_id
           })

           const userIDs = arrayData.map((user) => {
            return user.user_id
           })
           //console.log(userIDs, gameIDs);

           // URL personnalisées
            const baseUrlGame = "https://api.twitch.tv/helix/games?"
            const baseUrlUser = "https://api.twitch.tv/helix/users?"
            

            let queryParamsGame = ''
            let queryParamsUser = ''

            gameIDs.map((id) => {
                return (queryParamsGame = queryParamsGame + `id=${id}&`)

            })

            userIDs.map((id) => {
                return (queryParamsUser = queryParamsUser + `id=${id}&`)

            })

            // URL final
            let urlFinalGames = baseUrlGame + queryParamsGame
            let urlFinalUsers = baseUrlUser + queryParamsUser

            // console.log(urlFinalUsers);

            // appel
            let gamesNames = await apiTwitch.get(urlFinalGames)
            let getUsers = await apiTwitch.get(urlFinalUsers)

           // console.log(getUsers.data);

            let gameArray = gamesNames.data.data
            let arrayUser = getUsers.data.data
            
            //console.log(arrayUser);

         // creation tableau final
         let finalArray = arrayData.map((stream) => {
            
            stream.gameName = ''
            stream.truePic = ''
            stream.login = ''

            gameArray.forEach((name) => {
                arrayUser.forEach((user) => {
                    if(stream.game_id === name.id && stream.user_id === user.id){
                        stream.gameName = name.name
                        stream.truePic = user.profile_image_url
                        stream.login = user.login

                    }
                })
            })
            return stream

         })

         setTopStreams(finalArray.slice(0,6))


        }
        fetchData()

    },[])
   
    

    return (
        <div className="sidebar">
        <div className="pourVous">
            <p className="forYou">Pour vous</p>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#fafafa" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg></span>
        </div>
            <h2 className="titreSidebar"> Chaîne recommandées </h2>
                <ul className="liveStream">
                {topStreams.map((stream, index) => (
                    <li key={index} className="containerFlexSideBar">
                    <img src={stream.truePic} alt="logo user" className="profilePicRonde" />
                        <div className="streamUser">{stream.user_name}</div>
                        <div className="viewerRight">
                            <div className="pointRouge"></div>
                            <div>{stream.viewer_count}</div>
                        </div>

                        <div className="gameNameSidebar">{stream.gameName}</div>

                    </li>
                ))}

                </ul>
        </div>
    )
}