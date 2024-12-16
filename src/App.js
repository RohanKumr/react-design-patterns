import './App.css';
import { useState } from 'react';
import { people } from './data/people';
import { products } from './data/products';
import SplitScreen from './SplitScreen';
import RegularList from './components/Lists/RegularList';
import OrderedList from './components/Lists/OrderedList';
import SmallPersonList from './components/person/SmallPersonList';
import LargeProductList from './components/product/LargeProductList';
import LargePersonList from './components/person/LargePersonList';
import SmallProductList from './components/product/SmallProductList';
import Modal from './components/modal/modal';
import CurrentUserLoader from './components/api/UserLoader.js';
import UserInfo from './components/user/UserInfo.js';





const LeftHandComponent = ({ name }) => {
  return <h1 style={ { backgroundColor: 'cyan' } } >{ name }</h1>
}

const RightHandComponent = ({ name }) => {
  return <h1 style={ { backgroundColor: 'lightgreen' } } >{ name }</h1>
}

function App() {
  const [show, setShow] = useState({
    splitScreen: false,
    lists: false,
    modals: false,
  })

  return (
    <div className="App">

      {/* Layout Component */ }

      <h1>Split Screen <button onClick={ () => setShow(prev => ({ ...prev, splitScreen: !prev.splitScreen })) } >Show/Hide</button></h1>
      { show.splitScreen &&
        <SplitScreen leftWeight={ 1 } rightWeight={ 2 } >
          <LeftHandComponent name={ 'LEFT!' } />
          <RightHandComponent name={ 'RIGHT!' } />
        </SplitScreen>
      }
      <hr />
      <h1>List Types <button onClick={ () => setShow(prev => ({ ...prev, lists: !prev.lists })) } >Show/Hide</button> </h1>
      { show.lists && <>
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
      </> }
      <hr />
      <h1>Modal</h1>
      <Modal>
        <LargeProductList products={ products[0] } />
      </Modal>
      <hr />

      {/* Container Components */ }
      
      <CurrentUserLoader >
        <UserInfo />
      </CurrentUserLoader>

    </div>
  );
}

export default App;
