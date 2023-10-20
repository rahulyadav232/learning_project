import React from 'react';
import './Category.css';
// import categoryImage from './path-to-your-image/image.jpg';

const Category = () => {
    return (
        <div className='Category'>
            <div className='Category-button'>
                <button>Choose the Course that You Like</button>
            </div>
            <h4 className='Category-heading'>
                Browse by <span >Category</span>
            </h4>
          {/* 1 */}
          
          <div className="main">
        <div className="main-content">
            <div className="main-content-section">Online PG Programmes</div>
            <div className="main-content-section">Online PG Programmes</div>
            <div className="main-content-section">Online PG Programmes</div>
            <div className="main-content-section">Online PG Programmes</div>
            <div className="main-content-section">Online PG Programmes</div>
            <div className="main-content-section">Online PG Programmes</div>
            <div className="main-content-section">Online PG Programmes</div>
            <div className="main-content-section">Online PG Programmes</div>
        </div>
        <div className="main-footer">
            <div className="main-footer-text">Not sure what you like? Talk to our experts.</div>
            <button className="main-footer-button">Get Free Career Counselling</button>
        </div>
    </div>
          {/* 1 end */}
          {/* <div className='Category-bottom'>
            <h2>Not sure what you like? Talk to our experts.</h2>
            <button className='Counselling-button'>Get Free Career Counselling</button>
          </div> */}
        </div>
    );
}

export default Category;
