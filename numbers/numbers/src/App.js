import './App.css';
import React, { useEffect } from 'react';

const App = () => {
  var url = window.location.href.split('=')[1];
  console.log(url);
  url = 'http://104.211.219.98/numbers/primes';
  useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, []);

  return (
    <div className="App">
      {url}
    </div>
  );
};
// function App() {
//   const url = window.location.href.split('=');
//   console.log(url);
//   const path = window.location.pathname;
//   return (
//     <div className="App">
//       {url}
//       <br />
//       {path}

//     </div>
//   );
// }

export default App;
