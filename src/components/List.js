import React from 'react'
import { useGlobalContext } from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import loadingAnimation from '../assets/loading-arrow.gif'

const List = () => {
  const { menuItems, loading } = useGlobalContext();
  console.log(loading)
  const rating = <FontAwesomeIcon icon={faStar} />
  if (loading) return <img src={loadingAnimation} alt="loading animation" />;
  return (
    <section className='menuContainer'>
      {menuItems.map(item => {
        const { id, dsc, img, name, price, rate } = item;
        return (
          <article key={id}>
            <img src={img} alt={name} />
            <div className='menuContent'>
              <h2>{name}</h2>
              <span className='rating'>{[...Array(rate)].map((elm, index) => rating
              )}</span>
              <span className='price'>${price}</span>
              <p>{dsc}</p>
            </div>
          </article>
        )
      })}
    </section >
  )
}

export default List
