import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchList from './SearchList';import React, {useState, useEffect} from "react";

import dateFormat from 'dateformat';



function NovelsCard({person}) {
const [state, setState] = useState(0);
const [data,setData] = useState([]);

useEffect(()=>{
    async function getData(){
        const get = await fetch('https://mocki.io/v1/0b6f721e-74bd-4084-a821-4c08c2d53455');
        const res = await get.json();
        setData(res);
        console.log(res);
    }
    getData();
},[state])

    let navigate = useNavigate();
  return (
    <div>
        <div className="novels">
           {

                    <div className="ncard" onClick={
                      {}
                 }>
                         <img className="image" src="https://cdn.vox-cdn.com/thumbor/wF_Da9UCa5T834IGJpjG7xda6rE=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65162399/ply0947_fall_reviews_2019_tv_anime.0.jpg" alt="" />
                         <div className="details">
                             <h6>{person.title}</h6>
                             <p>4.5/5 <i className="fas fa-star"></i></p>
                             <div className="views">
                                 <p>12,102 views</p>
                                 <p>{dateFormat(person.created_at, "mm dS")}</p>
                             </div>
                           <Link to={"/details?id="+person.id}><a style={{marginRight:"15%"}} className="btn btn-primary">Read Now</a></Link>  
                         </div>
                     </div>
         
           }
            
        </div>
    </div>
  )
}

export default NovelsCard