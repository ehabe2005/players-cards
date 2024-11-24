import React from 'react';
import './Card.css'; 

const PlayerCard = ({Name,position,rating,pace,shooting,passing,defense,physical,photo }) => {
    return (
        <div className="card">
            <div className="card-header">
                <img className="card-photo" src={photo} alt="" />
            </div>
            <div className="card-body">
                <div className="card-info">
                    <h3 className="card-name">{Name}</h3>
                    <p className="card-position">position: {position}</p>
                    <p className="card-rating">rating: {rating}</p>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <span className="stat-label">Pace</span>
                        <span className="stat-value">{pace}</span>
                    </div>
                    <div className="stat">
                        <span className="stat-label">shooting</span>
                        <span className="stat-value">{shooting}</span>
                    </div>
                    <div className="stat">
                        <span className="stat-label">passing</span>
                        <span className="stat-value">{passing}</span>
                    </div>
                    <div className="stat">
                        <span className="stat-label">defense</span>
                        <span className="stat-value">{defense}</span>
                    </div>
                    <div className="stat">
                        <span className="stat-label">physical</span>
                        <span className="stat-value">{physical}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
