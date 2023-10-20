import React from 'react';
import './Forum.css'

const Forum = () => {
    return (
        <div className='form'>
            <button className='Doubt-button'>Still In Doubt</button>
            <h1 className='form-desceription'>Get <span>Personalised Guidance</span> for Free!</h1>
            <form className='form-details'>
                <label>
                  
                    <input type="text" name="name" placeholder="Your Name" />
                </label>
                <label>
                    
                    <input type="email" name="email" placeholder="Your Email" />
                </label>
                <label>
                   
                    <input type="tel" name="phone" placeholder="Your Phone Number" />
                </label>
                <label>
                  
                    <select name="course">
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                        <option value="course3">Course 3</option>
                    </select>
                </label>
                <button >Submit</button>
            </form>
        </div>
    );
}

export default Forum;
