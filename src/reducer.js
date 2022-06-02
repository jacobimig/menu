const reducer = (state, action) => {
  switch (action.type) {
    case 'BURGERS':
      // let burgerMenu = {
      //   'burgers': action.payload
      // };
      // Object.assign(state.menu, burgerMenu);
      return { ...state, menu: [...state.menu, action.payload] };
    case 'SANDWICHES':
      // let sandwichesMenu = {
      //   'sandwiches': action.payload
      // };
      // Object.assign(state.menu, sandwichesMenu);
      return { ...state, menu: [...state.menu, action.payload] };
    case 'BBQ':
      // let bbqMenu = {
      //   'bbq': action.payload
      // };
      // Object.assign(state.menu, bbqMenu);
      return { ...state, menu: [...state.menu, action.payload] };
    case 'ICE_CREAM':
      // let ice_creamMenu = {
      //   'ice cream': action.payload
      // };
      // Object.assign(state.menu, ice_creamMenu);
      return { ...state, menu: [...state.menu, action.payload] };
    default:
      return state;
  }
}
export default reducer;






