import {
  AboutFarm,
  Choose,
  Header,
  Hero,
  Resources,
  Services,
} from './components';

function App() {
  const data = [
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
    {
      id: 6,
      url: '/img-6.png',
      name: 'Milk',
    },
  ];
  const ChooseData = [
    {
      id: 1,
      url: '/icon-1.png',
      name: 'Best Farm',
      content:
        't is a long establi shed fact that a reader will be distracted by the readable content',
    },
    {
      id: 2,
      url: '/icon-1.png',
      name: 'Fresh Food and vegetables',
      content:
        't is a long establi shed fact that a reader will be distracted by the readable content',
    },
    {
      id: 3,
      url: '/icon-1.png',
      name: '100%Pure',
      content:
        't is a long establi shed fact that a reader will be distracted by the readable content',
    },
  ];
  return (
    <>
      <div className='bg-header-section bg-cover'>
        <Header />
        <Hero />
      </div>
      <Services data={data} />
      <AboutFarm />
      <Resources />
      <Choose data={ChooseData} />
    </>
  );
}

export default App;
