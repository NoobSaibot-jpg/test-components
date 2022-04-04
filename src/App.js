
import './App.css';
import Cards from './components/Cards';
import img from './img.png'

function App() {

  const items = [
    {
      tittle: 'Tittle1',
      img: {img},
      key: '1'
    },
    {
      tittle: 'Tittle2',
      img: {img},
      key: '2'
    },
    {
      tittle: 'Tittle3',
      img: {img},
      key: '3'
    }
  ]

  return (
    <div className="App">
      <div className="cards">
        <div className="cards_wraper"> 
          {items.map(i=><Cards tittle= {i.tittle} img={i.img.img}/>)}
        </div>
      </div>
        
      
    </div>
  );
}

export default App;
