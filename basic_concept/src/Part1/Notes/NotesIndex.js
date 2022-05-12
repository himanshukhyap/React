import React from 'react'
import NotesData, { Notes } from './Notes'


export default function NotesIndex() {
    console.log(NotesData)
    return (
<>
       {
           NotesData.map(x=>{
               return(
               <Notes key={x.key}
                   title = {x.title}
                   content = {x.content}
               />
               )
           })
       }

</>
    )
}