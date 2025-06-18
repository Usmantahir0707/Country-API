import { useTheme } from "../hooks/utility";


export default function CountriesShimmer() {
  
  const [dark] = useTheme();
  let key = 0;

  const shimmer = Array.from({ length: 10 })
    .fill("")
    .map((x) => {
      return (
    
          <a
            key={key++}
            style={{
              height: "250px",
              backgroundColor: dark ? "hsl(209, 23%, 22%)" : "",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              boxShadow: '0px 0px 10px rgba(0,0,0,0.5) inset'
            }}
            className="country-card"
            href=""
          >
            <p key={key++}
              style={{ height: "120px", backgroundColor: dark ? "rgb(23 31 39)" : "rgb(212 209 209)", margin: "0" }}
            ></p>
            <p key={key++}
              style={{
                height: "30px",
                backgroundColor: dark ? "rgb(23 31 39)" : "rgb(212 209 209)",
                margin: "0",
                marginTop: "20px",
                marginInline: "10px",
                borderRadius: '12px',
                marginBottom: '10px'
              }}
            ></p>
            <p key={key++}
              style={{
                height: "20px",
                backgroundColor: dark ? "rgb(23 31 39)" : "rgb(212 209 209)",
                margin: "0",
                marginInline: "15px",
                borderRadius: '10px'
              }}
            ></p>
            <p key={key++}
              style={{
                height: "20px",
                backgroundColor: dark ? "rgb(23 31 39)" : "rgb(212 209 209)",
                margin: "0",
                marginInline: "15px",
                borderRadius: '10px'
              }}
            ></p>
          </a>
       
      );
    });

  return <div className="countries-container">{shimmer}</div>;
}
