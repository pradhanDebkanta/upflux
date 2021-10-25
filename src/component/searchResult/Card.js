import React from 'react';
import '../../asserts/css/searchResult.css';


const Card = () => {
    return (
        <div className="four-col-lg">
            <div className="card-container">
                <div className="love-icon-box">
                    <i className="far fa-heart"></i>
                </div>
                <div className="card-details">
                    <h2 className="mentor-name">Raghav Kapoor</h2>
                    <div className="work-details">
                        <i className="fas fa-map-marker-alt"></i>
                        <p className="details">Researcher at Benaras Hindu university</p>
                    </div>
                    <div className="study-details">
                        <i className="fas fa-graduation-cap"></i>
                        <p className="details">Physics, Astrophysics, Nuclear Physics, Tunnel Vision</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
