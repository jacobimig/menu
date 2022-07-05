import React, { useEffect, useContext, useReducer, useState } from 'react'
import reducer from './reducer'

const AppContext = React.createContext();

const defaultState = {
  menu: [],
  isModalOpen: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [menuItems, setMenuItems] = useState(state.menu);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMenuItems(state.menu.flat())
  }, [state.menu])

  const filterMenu = (category) => {
    if (category === 'all') {
      setMenuItems(state.menu.flat());
      return;
    }
    const newItems = state.menu.flat().filter(item => item.category === category)

    setMenuItems(newItems)
  }

  useEffect(() => {

    function getBurgers() {
      fetch('https://ig-food-menus.herokuapp.com/burgers')
        .then((res) => res.json())
        .then(
          (result) => {
            setLoading(false)
            result = result.slice(0, 7);
            result.map(item => item.category = 'burgers');
            dispatch({ type: 'BURGERS', payload: result });
          },
          (error) => {
            alert(error)
          }
        )
    }
    function getSandwitches() {
      fetch('https://ig-food-menus.herokuapp.com/sandwiches')
        .then((resSandwich) => resSandwich.json())
        .then(
          (resultSandwich) => {
            resultSandwich = resultSandwich.slice(8, 13);
            resultSandwich.map(item => item.category = 'sandwiches');
            dispatch({ type: 'SANDWICHES', payload: resultSandwich });
          },
          (error) => {
            alert(error)
          }
        )
    }

    function getBbq() {
      fetch('https://ig-food-menus.herokuapp.com/bbqs')
        .then((resBBQ) => resBBQ.json())
        .then(
          (resultBBQ) => {
            resultBBQ = resultBBQ.slice(0, 6);
            resultBBQ.map(item => item.category = 'bbq');
            dispatch({ type: 'BBQ', payload: resultBBQ });
          },
          (error) => {
            alert(error)
          }
        )
    }

    function getDeserts() {
      fetch('https://ig-food-menus.herokuapp.com/desserts')
        .then((resIC) => resIC.json())
        .then(
          (resultIC) => {
            resultIC = resultIC.slice(0, 4);
            resultIC.map(item => item.category = 'ice cream');
            dispatch({ type: 'ICE_CREAM', payload: resultIC });
          },
          (error) => {
            alert(error)
          }
        )
    }

    getDeserts();
    getBbq();
    getSandwitches();
    getBurgers();

  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, menuItems, setMenuItems, filterMenu, loading }}>{children}</AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }