// 'use client'

// import React, { useState, useEffect } from 'react';

// function SlideShow() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [
//     { id: 'slide1', src: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp' },
//     { id: 'slide2', src: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp' },
//     { id: 'slide3', src: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
//     { id: 'slide4', src: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp' },
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3);
//     return () => clearInterval(intervalId);
//   }, [slides]);

//   return (
//     <div className="carousel mx-10 rounded-xl">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           id={slide.id}
//           className={`carousel-item relative w-full ${currentIndex === index ? 'active' : ''}`}
//         >
//           <img src={slide.src} className="w-full" />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href={`#${slides[(index - 1 + slides.length) % slides.length].id}`} className="btn btn-circle">❮</a>
//             <a href={`#${slides[(index + 1) % slides.length].id}`} className="btn btn-circle">❯</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SlideShow;
'use client'

import React, { useState, useEffect } from 'react';

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 'slide1', src: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp' },
    { id: 'slide2', src: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp' },
    { id: 'slide3', src: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
    { id: 'slide4', src: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // 3 seconds interval
    return () => clearInterval(intervalId);
  }, [slides]);

  return (
    <div className="carousel mx-10 rounded-xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={slide.id}
          className={`carousel-item relative w-full ${currentIndex === index ? 'active' : ''}`}
        >
          <img src={slide.src} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#${slides[(index - 1 + slides.length) % slides.length].id}`} className="btn btn-circle">❮</a>
            <a href={`#${slides[(index + 1) % slides.length].id}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SlideShow;
