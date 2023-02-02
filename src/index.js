import React from 'react';
import ReactDOM from 'react-dom/client';
import CreateElement from './components/ReactCreateElement';
import Counter from './components/FunctionalComponent';
import SearchFormPure from './components/ReactPureComponent';
import SearchForm from './components/ReactComponent';

import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateElement />
    <Counter />
    <SearchForm />
    <SearchFormPure />
  </React.StrictMode>
);

