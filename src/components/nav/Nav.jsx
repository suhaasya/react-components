import { useState } from "react"
import "./nav.css"

export default function Nav(){
    const [click,setClick] = useState(false);
    function handleClick(){
        setClick(!click)
    }
    return(
        <section className="nav">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div >
                <ul className="menu-items">
                    <div className={click ? 'menu-item-div active' : 'menu-item-div'}>
                    <li className="menu-item">Home</li>
                    <li className="menu-item">Products</li>
                    <li className="menu-item">About</li>
                    <li className="menu-item">Pricing</li>
                    </div>
                    <li className="menu-icon" onClick={handleClick}><i className={click?'fas fa-times':"fas fa-bars"}/></li>
                </ul>
            </div>
        </section>
    )
}