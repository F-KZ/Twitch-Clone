import { BsTwitch } from "react-icons/bs";
import "../../App.css";
import { Mailbox } from "./Mailbox";

export const Header = () => {

    return (
        <>
            <nav className="headerTop">
                <ul className="listeMenu">
                    <li className="liensNav">
                    <BsTwitch/>
                    </li>

                    <li className="liensNav">
                    <p className="texte">Suivis</p></li>
                    <li className="liensNav"> 
                    <p className="texte">Parcourir</p></li>
                    <li className="liensNav">
                    <p className="texte"><svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"  viewBox="0 0 128 512"><path fill="#fafafa"  d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg></p>    
                    </li>
                    <li className="liensNav"> 
                    <form action="" className="formSubmit">
                        <input type="text" placeholder="Rechercher..." className="inputRecherche"/>
                        <button type="submit" className="buttonRecherche">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 512 512"><path fill="#fafafa" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </button>
                    </form>
                    </li>
                    <Mailbox/>
                </ul>
            </nav>
           <div className="menuResBtn">
            <img src="" alt="" className="menuIco" />
           </div>

        </>
    )
}