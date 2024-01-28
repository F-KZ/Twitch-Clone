
export const Category = ({ title, icon }) => {
    return (
     
        <div className="categoryStyle">
        <div className="divImg">
          <img src={icon} alt="" />
        </div>
          <p className="categoryTexte">{title}</p>
        </div>
      
    );
  };

 