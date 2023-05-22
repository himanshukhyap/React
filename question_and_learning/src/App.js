
import './App.css';
import Form from './Form/Form';
import HOC from './Questions/HOC';
import IndexRedux from './Redux/IndexRedux';
import IndexRouting from './Routing/IndexRouting';

function App() {


  return (
    <div className="App">
      <IndexRouting />
      <Form />
      <HOC/>
      <IndexRedux />
    </div>
  );
}

export default App;

