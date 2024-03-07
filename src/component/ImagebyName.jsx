import React from 'react'
import "./stylee.css"
export default function ImagebyName(props) {
    let names=["Rohit","Virat","Dhoni","Gill"];
    let age=["36","35","42","24"];
    let profession=["Cricket Player","Cricket Player","Cricket Player & wicket keeper","Cricket Player"];
    let image=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGz_zMDCh_nSfX7V-03xv5jjdbmO6E4xwbA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5y6wVZWVwQRJNJ_N-2GwnstlFfRnRthfBdrWBnLI4SPUecwLpmN-PWtoj7X-IuZrpQ4&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9fGvNTcpZcrbfZOHlctVhX_H9MzJYl_Z8A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Yv_-syT5MxWOUdUln1li5EytNWj71Rg_cg&usqp=CAU"]
    for(let i=0;i<names.length;i++){
        if(props.name==names[i]){
            
            return(
                <>
               
               <div className="space"> <img src={image[i]} alt="img" />
                <h2> Names : {names[i]}</h2>
                <h4>Age : {age[i]}</h4>
                <h4>Profession : {profession[i]}</h4></div>
                </>
            )
        }
    }
   return "result not found";
  
}
