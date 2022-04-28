export default function Navbar(){
    const headerStyles ={
        display: "flex",
        justifyContent: "splace-between",
        listStyle: "None",
    }
    return(
        <header className="Header">
            <div className="Logo"></div>
            <ul style={headerStyles}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Perfil</li>
            </ul>
            
        </header>
    );
}