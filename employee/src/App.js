import $ from 'jquery'; 

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  $.ajax({

    url: "https://localhost:44350/api/Values/allemployee",
    type: 'get',

    success: function (result) {console.log(result)},
    error: function () {
        alert("error");
    }
});
  return (
    <div className="App">
    <h1>safdsf</h1>
    </div>
  );
}

export default App;
