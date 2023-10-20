import React from 'react';
import './Main.css'
// const Main = () => {
//   return (
    
//     <main>
//         <div>
//       <div className="main-section">
//         <img src="https://www.learningroutes.in/wp-content/uploads/2023/08/web-png_05-copy.webp" alt="Learning" />
//       </div>
//       <div className='main-heading'>Leading Career Counsellors</div>
//       <div className='main-description'>Explore India’s Top Distance Colleges for
// Personal Development</div>
// <div className='potrntial'>Unleash Your Hidden Potential</div>

// </div>
//     </main>
    
//   );
// }

const Main = () => {
  return (
    <div className='container'>
      <div className='content'>
        <h4>Leading Career Counsellors</h4>
        <h6>
          Explore India’s Top Distance Colleges for{" "}
          <span>Personal Development</span>{" "}
        </h6>
        <p>Unleash Your Hidden Potential</p>
        <input className='searchBar' />
      </div>
      <img src='/learning.webp' alt="Header" className='headerImage' />
      <div className='partner'></div>
    </div>
  );
};

export default Main;
