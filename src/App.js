import './App.css';
import SplitScreen from './SplitScreen';
import RegularList from './components/Lists/RegularList';
import OrderedList from './components/Lists/OrderedList';
import SmallPersonList from './components/person/SmallPersonList';
import LargeProductList from './components/product/LargeProductList';
import LargePersonList from './components/person/LargePersonList';
import { people } from './data/people';
import { products } from './data/products';
import SmallProductList from './components/product/SmallProductList';




const LeftHandComponent = ({ name }) => {
  return <h1 style={ { backgroundColor: 'cyan' } } >{ name }</h1>
}

const RightHandComponent = ({ name }) => {
  return <h1 style={ { backgroundColor: 'lightgreen' } } >{ name }</h1>
}

function App() {


  return (
    <div className="App">
      <SplitScreen leftWeight={ 1 } rightWeight={ 2 } >
        <LeftHandComponent name={ 'LEFT!' } />
        <RightHandComponent name={ 'RIGHT!' } />
      </SplitScreen>
      <hr />
      <RegularList
        items={ people }
        resourceName='person'
        itemComponent={ SmallPersonList }
      />
      <RegularList
        items={ people }
        resourceName='person'
        itemComponent={ LargePersonList }
      />
      <OrderedList
        items={ products }
        resourceName='products'
        itemComponent={ SmallProductList }
      />
      <OrderedList
        items={ products }
        resourceName='products'
        itemComponent={ LargeProductList }
      />

    </div>
  );
}

export default App;
