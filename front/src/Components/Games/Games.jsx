import { useEffect, useState } from "react"
import { apiTwitch } from "../../api/api";
import { Parcourir } from "../HeaderParcourir/Parcourir";
import { SwitchPage } from "../SwitchPage/SwitchPage";



export const Games = () => {
    const [ games, setGames] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await apiTwitch.get('https://api.twitch.tv/helix/games/top')
            console.log(result);
            

            let dataArray = result.data.data
            let finalArray = dataArray.map((x) => {
                let newUrl = x.box_art_url
                .replace("{width}", "250")
                .replace("{height}", "300")
                x.box_art_url = newUrl
                return x
            })
            setGames(finalArray)
        }
        fetchData()
    }, []);
   

    return (
        <div className="test">
        <Parcourir/>
        <SwitchPage/>
        <div className="flexAccueil">
            {games.map((game, index) => (
                <div key={index} className="carteGames">
                    <img src={game.box_art_url} alt="" className="imgCartes"/>
                    <div className="cardBodyGames">
                    <h5 className="titreCardGames">{game.name}</h5>
                    <div className="btnCarte">Regarder {game.name}</div>

                    </div>
                </div>

            ))}
        </div>
        </div>
    )
}