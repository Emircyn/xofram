import {
  AboutFarm,
  Choose,
  Header,
  Hero,
  Resources,
  Services,
  Blog,
} from './components';
function App() {
  const data = [
    {
      id: 1,
      url: 'https://picsum.photos/1920.webp',
      name: 'Vegetable',
    },
    {
      id: 2,
      url: 'https://picsum.photos/1920.webp',
      name: 'Fruit',
    },
    {
      id: 3,
      url: 'https://picsum.photos/1920.webp',
      name: 'Salad',
    },
    {
      id: 4,
      url: 'https://picsum.photos/1920.webp',
      name: 'Berries',
    },
    {
      id: 5,
      url: 'https://picsum.photos/1920.webp',
      name: 'Milk',
    },
    {
      id: 6,
      url: 'https://picsum.photos/1920.webp',
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

      <Services propsInfo={data} />
      <AboutFarm />
      <Resources />
      <Choose data={ChooseData} />
      <Blog />
    </>
  );
}

export default App;
