// // src/Dashboard.js
// import React from 'react';
// import useAuthStatus from './useAuthStatus';
// import useAuth from './useAuth';
// import { Link } from 'react-router-dom';

// function Dashboard() {
//    const { Auth_singout } = useAuth(); // Destructure the logout function


//   return (
//     <div className="dashboard-container text-center">
//       <h1>Welcome to the Dashboard</h1>
//       <Link to="/chat">Go to Chat</Link> {/* Link to the Chat component */}
//       <button className="btn btn-secondary" onClick={()=>Auth_singout()}>
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Dashboard;
