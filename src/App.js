import React from 'react';
import Header from "./Header";
import Main from './Main'

// import {BrowserRouter as Router, Link} from 'react-router-dom';
// import Checkout from './Checkout';

class App extends React.Component {
  render(){
    return(
      <div className="container">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div className="container">
//           <h2>Food App</h2>
//           <ul className="foodItems">
//             <li><Link to={'/checkout'}>Wine $20</Link></li>
//             <li><Link to={'/checkout'}>Chocolate $5</Link></li>
//             <li><Link to={'/checkout'}>Sushi $10</Link></li>
//             <li><Link to={'/checkout'}>Avocado Toast $8</Link></li>
//           </ul>
//         </div>
//       </Router>
//     );
//   }
// }
//
// export default App;
