import { useTheme } from "../hooks/utility";


export default function Header() {
 const [dark, setDark] = useTheme();
  return (
    <div className={`header-container ${dark ? "dark" : ""}`}>
      <div className="header-content">
        <h3 className="title">Where in the world?</h3>
        <p className="hp" onClick={()=>{
          
          if(dark){
            localStorage.setItem('dark', 'false')
          } else {
             localStorage.setItem('dark', 'true')
          }

          setDark((prev)=>!prev);
        }}>
          <i className="fa-regular fa-moon"></i>{" "}
          <i className="fa-solid fa-sun"></i>{" "}
          <span id="mode-text">{dark ? "Dark mode" : "Light mode"}</span>
        </p>
      </div>
    </div>
  );
}
