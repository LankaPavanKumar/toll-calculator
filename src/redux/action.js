export const setVehicleType = (vehicleType) => ({
    type: 'SET_VEHICLE_TYPE',
    payload: vehicleType,
  });
  
  export const setDistance = (distance) => ({
    type: 'SET_DISTANCE',
    payload: distance,
  });
  
  export const calculateToll = () => ({
    type: 'CALCULATE_TOLL',
  });