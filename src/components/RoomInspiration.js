import React from 'react';

const RoomInspiration = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
        <button>Explore More</button>
      </div>
      <div className="right-section">
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtIG9M42iFDuwjatBdA6MHXEU6MEB0sz88Q&s"
            width="400"
            height="500"
            alt="room1"
          />
        </div>
        <div className="image">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/edc050124lavonne-extras-004-662810f9ae321.jpg?crop=0.7846938775510204xw:1xh;center,top&resize=1120:*"
            width="300"
            height="400"
            alt="room2"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;
