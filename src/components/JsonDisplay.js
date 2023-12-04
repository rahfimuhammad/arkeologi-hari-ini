import React from 'react';
import "../pages/traditionalBoatsOfIndonesia/traditionalBoatsOfIndonesia.css"

const JsonDisplay = ({ data }) => {
  return (
    <div style={{padding: "0 3vw"}} className="glosariumData">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default JsonDisplay;