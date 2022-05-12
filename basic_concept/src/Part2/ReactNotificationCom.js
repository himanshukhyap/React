import React from 'react'
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

function ReactNotificationCom() {
  return (
      <>
    {/* <div>ReactNotificationCom</div> */}
     <ReactNotifications/>
    </>
    
  )
}

 export function Home(){
     const notifications = ()=>{ Store.addNotification({
        title: "Wonderful!",
        message: "teodosii@react-notifications-component",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });}
   
    return(
        <div>

            <button onClick={()=>{notifications()}}>default</button>
        </div>
    )
}

 export default ReactNotificationCom 