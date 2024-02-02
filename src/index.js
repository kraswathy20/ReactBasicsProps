import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Footer from './Components/Footer';
import List from './list/List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div className='app'>
      <Header/>
      <div className='app-body'>
        <List/>
      </div>
     
      <Footer/>
   </div>
  </React.StrictMode>
);


