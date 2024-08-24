import './App.css';
import SplitScreen from './SplitScreen';

const LeftHandComponent = () => {
  return <h1 style={ { backgroundColor: 'cyan' } } >LEFT!</h1>
}

const RightHandComponent = () => {
  return <h1 style={ { backgroundColor: 'lightgreen' } } >RIGHT!</h1>
}

function App() {


  return (
    <div className="App">
      <SplitScreen

        leftWeight={ 1 }
        rightWeight={ 2 }
      >
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen>
    </div>
  );
}

export default App;
