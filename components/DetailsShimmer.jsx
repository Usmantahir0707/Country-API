

export default function DetailsShimmer({dark}) {
  return (
    <div 
    style={{paddingLeft: '3rem', 
    minHeight: 'calc(100vh - 60px)', 
    backgroundColor: dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 99%)',
    color: dark ? 'hsl(0, 0%, 99%)' : 'black',  
    textAlign: 'center',
    paddingTop: '10px',
    fontWeight: 'Bold',
    fontSize: 'larger',
    }}>
     Loading . . .
    </div>
  );
}
