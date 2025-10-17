import Banner from './components/home/Banner';
import NewCollectionShowCase from './components/home/NewCollectionShowCase';
import ShowCase from './components/home/ShowCase';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <ShowCase
        title="New Arrival"
        description="Discover the essence of style with BLOCKRAVE Signatures, where every piece tells a story of elegance and individuality."
        items={[
          {
            id: '1',
            name: 'Item 1',
            imageUrls: [
              'https://framerusercontent.com/images/HYPDUEgaGE7A4LTB3rZG9YE0Ho4.jpg?scale-down-to=1024',
              'https://framerusercontent.com/images/HYPDUEgaGE7A4LTB3rZG9YE0Ho4.jpg?scale-down-to=1024',
            ],
            price: 100,
            description: '',
            link: '',
          },
          {
            id: '2',
            name: 'Item 2',
            imageUrls: [
              'https://framerusercontent.com/images/HYPDUEgaGE7A4LTB3rZG9YE0Ho4.jpg?scale-down-to=1024',
              'https://framerusercontent.com/images/HYPDUEgaGE7A4LTB3rZG9YE0Ho4.jpg?scale-down-to=1024',
            ],
            price: 100,
            description: '',
            link: '',
          },
          {
            id: '3',
            name: 'Item 3',
            imageUrls: [
              'https://framerusercontent.com/images/HYPDUEgaGE7A4LTB3rZG9YE0Ho4.jpg?scale-down-to=1024',
              'https://framerusercontent.com/images/HYPDUEgaGE7A4LTB3rZG9YE0Ho4.jpg?scale-down-to=1024',
            ],
            price: 100,
            description: '',
            link: '',
          },
        ]}
      />
      <NewCollectionShowCase />
    </main>
  );
}
