export const reducer = (state, action) => {
  switch(action.type) {
    case 'refetch':
      return {...state, refetch: action.payload};
    default:
      return state;
  }
}