import React from "react";
export default function Card (props){ 
    console.log( props )
     return (
        <div className="card">
             {props.el.openSpots === 0 && <div className="card--badge">SOLD OUT</div>  }
             {props.el.openSpots != 0 && <div className="card--badge">ONLINE</div>  }
            <img src= {`\public\\assets\\${props.el.imgsrc}`} alt="" />
             <p>
                ⭐{props.el.rating}
                <span id="rating">({props.el.rnum})-{props.el.country } </span>
                
             </p>
             <p>{props.el.des}</p>
             <p><span id="price">From ${props.el.price}</span>/ person</p>
        </div>
     )
}