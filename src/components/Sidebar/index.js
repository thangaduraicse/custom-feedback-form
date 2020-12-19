import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="components-sidebar">
      <ul>
        <li><NavLink activeClassName="active" exact replace to="/home">Home</NavLink></li>
        <li><NavLink activeClassName="active" exact replace to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" exact replace to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
};

export default Sidebar;


// const Sidebar = () => ( <nav className="components-sidebar"> <input type="checkbox" /> <span /> <span /> <span /> < </nav> ); export default Sidebar; 
    
//   <body>
    
//     <div class="container">
//     <header>
//       <div class="menu-toggle" data-js="menu-toggle">
//         <span class="menu-toggle-grippy">Toggle</span>
//         <span class="menu-toggle-label">Menu</span>
//       </div>
//     </header>
      
//     <section class="banner" role="banner">
//       <h1>Hello there</h1>
//       <h2>This is an experimental CodePen which utilises an absolutely positioned hidden panel which can be triggered by clicking a toggle.</h2>
//     </section>
    
//     <div class="hidden-panel">
      
//       <span class="hidden-panel-close" data-js="hidden-panel-close">Close</span>
      
//       <div class="hidden-panel-content">
        
//         <nav class="hidden-panel-nav">
//           <h3>Quick Look</h3>
//           <ul>
//             <li><a href="#" title="Home">Home</a></li>
//             <li><a href="#" title="About">About</a></li>
//             <li><a href="#" title="Blog">Blog</a></li>
//             <li><a href="#" title="Work">Work</a></li>
//             <li><a href="#" title="Contact">Contact</a></li>
//           </ul>
//         </nav>
        
//         <div class="hidden-panel-text">
//           <p>This is an experimental CodePen which utilises an absolutely positioned hidden panel which can be triggered by clicking a toggle.</p>
//         </div>
        
//         <div class="hidden-panel-credits">
//           <span>Coded by <a href="https://twitter.com/darrenhuskie" title="Darren Huskie">Darren Huskie</a>.</span>
//           <span>Powered by <a href="#" title="some framework">some framework</a>.</span>
//           <span>Hosted by a <a href="#" title="web host">web host</a>.</span>
//         </div>
        
//       </div>
//     </div>
//     </div>

//   </body>
// </html>