import React from 'react'
import ToValidateCard from './ToValidateCard'


const SuperAdmin = (props) => {

    return (
        <div className="Container" style={{display:"flex", justifyContent:'space-between'}} >
        { props.Idquizzes.map((Id,i)=>{
            return <ToValidateCard key = {i} Id={Id} Quizzes = {props.Quizzes} Books= {props.Books} Book={props.Books.filter(elem=>
                (elem.id === Id))} />
            })
        }
    </div>
    )
}
        
       


export default SuperAdmin