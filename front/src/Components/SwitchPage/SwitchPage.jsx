

export const SwitchPage = () => {

    return (
        <div className="containerSwitchPage">
            <div className="navPage">
            <h1 className="categorie">Catégories</h1>
            <h1 className="categorie">Chaînes Live</h1>
            </div>
            <div className="barre">
            <input type="text" placeholder="Rechercher des tag de c" className="inputRech"/>
            <p>Trier par <input type="text" className="Rech"/></p>

            </div>
        </div>
    )
    
}