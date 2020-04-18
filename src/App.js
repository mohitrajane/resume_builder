import React from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
    <p>Hello world</p>
    <Button onClick={onClick}>This is a test</Button>
    </div>
  );
}
function onClick(){
  console.log('Click worked')
}


export default App;
