

export default function Header(){

    return(
        <header>
            <div id="headerBranding">
                ColourAcademy
            </div>
            <NavLink to={"/"}> Home </NavLink>
            <NavLink to={"/generator"}> Generator </NavLink>
            <NavLink to={"/generator/saved"}> Saved Themes </NavLink>
        </header>
    )
}