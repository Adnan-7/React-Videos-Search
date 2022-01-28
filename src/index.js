import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const onButtonClick = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <div>
//       <button onClick={onButtonClick}>click me</button>
//       <h1>{`counter is : ${counter}`}</h1>
//     </div>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <Counter />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
