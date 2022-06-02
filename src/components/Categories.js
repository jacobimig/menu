import React from 'react'
import { useGlobalContext } from '../context'

const Categories = () => {
 const { menu, filterMenu } = useGlobalContext();
 const allCategories = ['all', menu.map(item => item[0].category)].flat();
 return (
  <section className="menuCats">
   {allCategories.map((cat, index) => {
    return (
     <button key={index} type="button" onClick={() => filterMenu(cat)}>{cat}</button>
    )
   })}
  </section>
 )
}

export default Categories