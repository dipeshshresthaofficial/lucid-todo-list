import React from 'react';
import './App.css';

import TodoDashboard from './components/TodoDashboard.js';

function App() {
  return (
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <TodoDashboard />
    </div>
  );
}

export default App;
