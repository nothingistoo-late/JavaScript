// App.jsx
import './App.css';
import img1 from './assets/img-1.png';
import img2 from './assets/img-2.png';
import img3 from './assets/img-3.png';
import img4 from './assets/img-4.png';
import img5 from './assets/img-5.png';
import img6 from './assets/img-6.png';
import img7 from './assets/img-7.png';
import { useState } from 'react';

function UI() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const [currentIndex, setCurrentIndex] = useState("Xin chào mình là Trung, mình đang học lập trình web."); 
  // clone ảnh để trượt vô cực
  const slides = [...images, ...images];
  function handleExploreClick() {
    // const time = new Date().getHours().toLocaleString("vi-VN");
    const time = 16;
    if (time <= 12) {
      setCurrentIndex("Chào buổi sáng! Hôm nay bạn có kế hoạch gì không?");
    } else if (time <= 18) {
      setCurrentIndex("Chào buổi chiều! Bạn đã hoàn thành công việc hôm nay chưa?");
    } else {
      setCurrentIndex("Chao buổi tối! Hãy thư giãn và tận hưởng thời gian của bạn.");
    }
  }

  return (<>
  <section className="header">
      <h2>Welcome to Our Gallery</h2>
      <p>Discover stunning images in our endless slider.</p>
      <p>{currentIndex}</p>
      <button className="btn" onClick={handleExploreClick}>Explore Now</button>
    </section>
    <div className="slider">
      <div className="slides">
        {slides.map((img, i) => (
          <img key={i} src={img} alt={`Slide ${i + 1}`} />
        ))}
      </div>

      <button className="btn">Explore Now</button>

    </div>
    </>
  );
}

function App() {
  return <UI />;
}

export default App;
