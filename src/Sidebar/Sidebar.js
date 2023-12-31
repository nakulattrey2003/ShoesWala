import react from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

function Sidebar({handleRadioChange})
{
    return(
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1 className="logo-all">Shoes<span className="sidebar-logo">Wala</span></h1>
                </div>
                <Category handleRadioChange={handleRadioChange} />
                <Price handleRadioChange={handleRadioChange} />
                <Colors handleRadioChange={handleRadioChange} />
            </section>
        </>
    )
}

export default Sidebar;

