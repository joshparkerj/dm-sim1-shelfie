import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';

const App = function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/add" component={Form} />
          <Route path="/edit/:id" component={Form} />
          <Route path="/" component={Dashboard} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
