import "./style.scss";
import { Link } from "react-router-dom";

export default function Header({openFilterWidget, closeOrOpen }) {
    const onClick = () => {
        openFilterWidget(!closeOrOpen)
    }
    return(
        <div className="header">
            <h1 className="header-title"><Link to={"/"} style={{ textDecoration: "none"}} >Pokedex</Link></h1>
            <div className="header-open"><button onClick={onClick} className="header-button">Types</button></div>
        </div>
    )
}