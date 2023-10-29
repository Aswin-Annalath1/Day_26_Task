import { Link } from "react-router-dom";

const Navbar=()=>{
        const navBarStyle={
            display:"flex",
            justifyContent:"center",
            gap:"50px",
            padding:"15px"
            
            
        
        }
       
        return(
            <>
             {/* // inline styling */}
            <div style={{color:"white",height:"60px",width:"100%",backgroundColor:" rgb(153, 204, 248)",marginBottom:"0%",fontFamily:"revert", fontSize:"20px"}}>
    
               <div style={navBarStyle}>
                    <div className="box1">
                        <Link to='/'>All</Link>
                    </div>
                    <div className="box2">
                        <Link to='/malayalam'>Malayalam</Link>
                    </div>
                    <div className="box4">
                        <Link to='/tamil'>Tamil</Link>
                    </div>
                    <div className="box3">
                        <Link to='/hindi'>Hindi</Link>
                    </div>
                </div> 
            </div>
            </>
        )
    }
    export default Navbar;