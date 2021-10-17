
import './App.css';

import { Component } from 'react';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import PixabyFetch from './components/PixabyFetch/PixabyFetch';

import './index.css';

const newPixabyFetch = new PixabyFetch();

export default class App extends Component {
  state = {
    search: '';
    page: 1,
    status: 'init',
    modalIsOpen: false,
    largeImg: '',
    responseData: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      window.scrollTo({
        top: document.documentElement,
        behavior: 'smooth',
      });
      newPixabyFetch.resetPage();
      this.setState({ status: 'pending', page: 1 });
      

    }
  }
}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
