import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./style.css";
import ThemeProvider from "./contexts/Theme";




const App = () => {
 
  
  return (
    <ThemeProvider>
    <Header/>
    <Outlet />
    </ThemeProvider>
  );
};

export default App;

