import { add, age, divide, multiply, subtract } from './Calculator'
import NotesIndex from './Notes/NotesIndex'
import ComA, { ComB } from './Basic'
import UseState from './UseState'
import ExpenseForm from './ExpenseForm'
import UseEffect from './UseEffect'

 function  Part1Index() {
  return (
    <div>
      {/* <ComA/><ComB/>
  <p>Age: {age}</p> */}
      {/* <ul>
    <li>1+2= {add(1, 2)}</li>
    <li>2*3= {multiply(2, 3)}</li>
    <li>7-2= {subtract(7, 2)}</li>
    <li>5/2= {divide(5, 2)}</li>
  </ul> */}
   <UseState/> 
     <NotesIndex/> 
       <ExpenseForm/> 
     <UseEffect/> 
    </div>
  )
}
export default Part1Index;