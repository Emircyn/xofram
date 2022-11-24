import { useState } from 'react';
import { Header, Hero, Services } from './components';

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      url: '/img-2.png',
      name: 'Vegetable',
    },
    {
      id: 2,
      url: '/img-3.png',
      name: 'Fruit',
    },
    {
      id: 3,
      url: '/img-4.png',
      name: 'Salad',
    },
    {
      id: 4,
      url: '/img-5.png',
      name: 'Berries',
    },
    {
      id: 5,
      url: '/img-6.png',
      name: 'Milk',
    },
  ]);
  return (
    <>
      <div className='bg-header-section bg-cover'>
        <Header />
        <Hero />
      </div>
      <Services data={data} />
    </>
  );
}

export default App;
