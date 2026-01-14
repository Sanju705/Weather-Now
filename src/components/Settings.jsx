import React, { useState } from "react";
import "../styles/App.css";

function Settings({ onBack, units = 'metric', setUnits }) {
  const [localUnits, setLocalUnits] = useState(units);
  const [showUV, setShowUV] = useState(true);

  const handleSave = () => {
    if (setUnits) setUnits(localUnits);
    try { localStorage.setItem('weather_showUV', showUV ? '1' : '0'); } catch(e){}
    onBack && onBack();
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <div style={{ margin: '0.5rem 0' }}>
        <label style={{ marginRight: '0.5rem' }}>Units:</label>
        <select value={localUnits} onChange={(e)=>setLocalUnits(e.target.value)}>
          <option value="metric">Metric (°C, m)</option>
          <option value="imperial">Imperial (°F, mi)</option>
        </select>
      </div>

      <div style={{ margin: '0.5rem 0' }}>
        <label style={{ marginRight: '0.5rem' }}>
          <input type="checkbox" checked={showUV} onChange={(e)=>setShowUV(e.target.checked)} /> Show UV Index
        </label>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <button className="btn" onClick={handleSave}>Save & Back</button>
      </div>
    </div>
  );
}

export default Settings;
