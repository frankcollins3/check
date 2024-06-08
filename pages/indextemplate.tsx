import React from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="app">
      {/* Top Toolbars */}
      <div className="top-toolbar">
        <div className="left-top-toolbar">Left Toolbar</div>
        <div className="right-top-toolbar">Right Toolbar</div>
      </div>
      
      <div className="content">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <p>Left Side Toolbar</p>
        </div>
        
        {/* Main Content */}
        <div className="main-content">
          <p>Main Content</p>
        </div>
        
        {/* Right Sidebar */}
        <div className="right-sidebar">
          <p>Ads and Stuff</p>
        </div>
      </div>
    </div>
  );
}

export default App;

// .app {
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
// }

// .top-toolbar {
//   display: flex;
//   justify-content: space-between;
//   padding: 10px;
//   background-color: #f5f5f5;
//   border-bottom: 1px solid #ddd;
// }

// .left-top-toolbar,
// .right-top-toolbar {
//   display: flex;
//   align-items: center;
// }

// .content {
//   display: flex;
//   flex: 1;
// }

// .left-sidebar,
// .right-sidebar {
//   width: 200px;
//   background-color: #f9f9f9;
//   border-right: 1px solid #ddd;
//   padding: 10px;
// }

// .left-sidebar {
//   border-right: 1px solid #ddd;
// }

// .right-sidebar {
//   border-left: 1px solid #ddd;
// }

// .main-content {
//   flex: 1;
//   padding: 10px;
//   background-color: #fff;
// }