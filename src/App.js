import './App.css'
import List from './components/List'
import './assets/style.css'
import Categories from './components/Categories'

function App() {
  return (
    <div className='appContainer'>
      <h1>Our Menu</h1>
      <Categories />
      <List />
    </div>
  )
}

export default App
