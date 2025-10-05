import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import Upload from './Upload';

function App() {
  const [token, setToken] = useState('');
  return (
    <div>
      <h1>AI Document Analysis</h1>
      {!token ? (
        <>
          <Signup />
          <Login setToken={setToken} />
        </>
      ) : (
        <Upload token={token} />
      )}
    </div>
  );
}
export default App;
