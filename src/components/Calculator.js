import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVehicleType, setDistance, calculateToll } from '../redux/actions';

const Calculator = () => {
  const dispatch = useDispatch();
  const { vehicleType, distance, toll } = useSelector((state) => state);

  const handleVehicleTypeChange = (e) => {
    dispatch(setVehicleType(e.target.value));
  };

  const handleDistanceChange = (e) => {
    dispatch(setDistance(Number(e.target.value)));
  };

  const handleCalculateToll = () => {
    dispatch(calculateToll());
  };

  return (
    <div>
      <label>
        Vehicle Type:
        <input type="text" value={vehicleType} onChange={handleVehicleTypeChange} />
      </label>
      <label>
        Distance:
        <input type="number" value={distance} onChange={handleDistanceChange} />
      </label>
      <button onClick={handleCalculateToll}>Calculate Toll</button>
      <p>Toll: {toll}</p>
    </div>
  );
};

export default Calculator;