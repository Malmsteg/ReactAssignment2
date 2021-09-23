import React from "react";
import { GreetUser } from "./components/GreetUser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import {Routes} from "./routes/routes"

function App(){
    return (<Routes></Routes>)
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />            
//           </Route>
//           <Route path="/">
//             <Home />
//             <div><GreetUser /></div>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

// function Home() {
//   return <h1>Home</h1>;
// }

// function About() {
//   return <h1>About</h1>;
// }

// function Users() {
//   return <h1>Users</h1>;
// }