import { Category } from "./Category";
import casque from "../../assets/casque.svg";
import jeu from "../../assets/jeu.svg";
import micro from "../../assets/micro.svg";
import palette from "../../assets/palette.svg";
import trophée from "../../assets/trophée.svg";
import banniere from "../../assets/banniere.svg";



export const Parcourir = () => {
    const categories = [
        {
          title: "Jeux",
          icon: jeu,
        },
        {
          title: "IRL",
          icon: micro,
        },
        {
          title: "Musique",
          icon: casque,
        },
        {
          title: "Esports",
          icon: trophée,
        },
        {
          title: "Creatif",
          icon: palette,
        },
      ];
      
      return (
        <div className="container">
        {/* Banniere */}
        <div className="banniere">
          <img src={banniere}/>
        </div>
          {/* Title */}
          <h1 className="titreListe">Parcourir</h1>
          {/* Categories */}
          <div className="category">
            {categories.map((category, index) => (
              <Category
              key={index}
                title={category.title}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      );
}