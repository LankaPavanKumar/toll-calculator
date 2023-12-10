const initialState = {
    vehicleType: '',
    distance: 0,
    toll: 0,
  };
  
  const tollReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VEHICLE_TYPE':
        return { ...state, vehicleType: action.payload };
      case 'SET_DISTANCE':
        return { ...state, distance: action.payload };
      case 'CALCULATE_TOLL':
        // Implement your toll calculation logic here
        // For simplicity, let's assume toll is distance * 0.1 for now
        return { ...state, toll: state.distance * 0.1 };
      default:
        return state;
    }
  };
  
  export default tollReducer;