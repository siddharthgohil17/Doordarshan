import React,{useState} from "react"
import "./Categorise.scss"
import { useDispatch } from "react-redux"
import { getVideosByCategory,getPopularVideos } from "../../redux/actions/videos.action"

const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Carryminati',
 ]

const Categorise=()=>{

    const [activeElement,SetElm]=useState('All')

    const dispatch=useDispatch();
 const handleclick=(value)=>{
    // console.log(value)
       SetElm(value);
       if(value==='All')
       { dispatch(getPopularVideos())}
       else{
        dispatch(getVideosByCategory(value))
       }
       
}

    return (
        <div className="categoriesBar">
        {keywords.map((value,i)=>(
         <span key={i} onClick={() => handleclick(value) }
         className={activeElement===value?'active':""} value={activeElement}>
           {value}
   
         </span>
        )) }
           
        </div>
    )
}
export default Categorise;