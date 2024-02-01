import Introduction from './components/introduction';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello Dojo!</h1>
      <Introduction name="konohamaru" age="25"/>
      <Introduction name="Naruto" age="20"/>
    </div>
  );
}

export default App;
