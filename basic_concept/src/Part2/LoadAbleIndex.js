import React from 'react';
import Loadable from 'react-loadable';


// function LoadingA() {
//   return <div>Loading...</div>;
// }
// function LoadingA(props) {
//   if (props.error) {
//     return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
//   } else if (props.pastDelay) {
//     return <div>Loading...</div>;
//   } else {
//     return null;
//   }
// }

function LoadingA(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return <div>Loading...</div>;
  }
}
const ComANew = Loadable({
  loader: () => new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(import('./ComA')),1500) 
  }) ,
  loading:LoadingA,
});

function LoadAbleIndex() {
  return (
      <>
    <div>Loadable</div>
    <ComANew/>
    </>
  )
}

export default LoadAbleIndex