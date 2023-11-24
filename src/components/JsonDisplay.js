import React from 'react';
import "../pages/traditionalBoatsOfIndonesia.css"

const JsonDisplay = ({ data }) => {
  return (
    <div style={{padding: "3vw", backgroundColor: "rgba(255, 255, 255, .8)"}} className="glosariumData">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default JsonDisplay;