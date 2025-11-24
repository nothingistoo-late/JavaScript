// App.jsx
import './App.css';
import img1 from './assets/img-1.png';
import img2 from './assets/img-2.png';
import img3 from './assets/img-3.png';
import img4 from './assets/img-4.png';
import img5 from './assets/img-5.png';
import img6 from './assets/img-6.png';
import img7 from './assets/img-7.png';

function UI() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  // clone ảnh để trượt vô cực
  const slides = [...images, ...images];

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((img, i) => (
          <img key={i} src={img} alt={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

function App() {
  return <UI />;
}

export default App;
