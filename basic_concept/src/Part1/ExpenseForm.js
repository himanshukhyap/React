import { useState } from "react";

function ExpenseForm() {
    const [data, setData] = useState({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: ""
    });
  
    function myChangeHandler(event) {
      let nam = event.target.name;
      let val = event.target.value;
      setData(
        Object.assign(data, {
          [nam]: val
        })
      );
      console.log(data);
    }
  
    return (
      <form onSubmit={(e)=>console.log(e)}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              name="enteredTitle"
              onChange={(event) => myChangeHandler(event)}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="text"
              name="enteredAmount"
              onChange={(event) => myChangeHandler(event)}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              name="enteredDate"
              onChange={(event) => myChangeHandler(event)}
            />
          </div>
        </div>
      </form>
    );
  }
  export default ExpenseForm;