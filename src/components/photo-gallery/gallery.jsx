import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './gallery.css'
import '../header/header.css'




const Gallery = () => {


const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
responsive: [
{
breakpoint: 1624,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
infinite: true,
dots: true},
},
{
breakpoint: 1224,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
initialSlide: 1
}
},
{
breakpoint: 1108,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
initialSlide: 1
}
},
{
breakpoint: 900,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
initialSlide: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
};


const images = [
'https://img.freepik.com/free-photo/male-worker-checking-new-furniture-after-assambly-handyman-helping-people_482257-24857.jpg?t=st=1724600252~exp=1724603852~hmac=20d7e5ab92ccc700a17d1f72a8428ceeaf296bd3df35af5d49d5d1b707d9e723&w=1380',
'https://img.freepik.com/free-photo/tiler-working-renovation-apartment_23-2149278621.jpg?t=st=1724600435~exp=1724604035~hmac=c596cd82341e774915bab15ebcc8b588669d2d72b0641bd1a6d381110835aa36&w=1380',
'https://img.freepik.com/free-photo/furniture-assembly-worker-uses-laptop-consult-instructions-handyman-doing-good-job_482257-24842.jpg?t=st=1724600495~exp=1724604095~hmac=3f65a393fb0bdaccd7613be507d8576169d15d5aedb1c218857346e52fe6f7f1&w=1380',
'https://img.freepik.com/free-photo/partial-focus-photo-man-is-painting-ceiling-using-roller-brush_1150-6132.jpg?t=st=1724600882~exp=1724604482~hmac=f0ecc614e1604a4e79408996ca4035c5748fef2e1eb7636c7caee271dcb89c67&w=1060',
];


return (
<main className='bg-gallery'>
   <section className='gallery-container'>
      <h2>Photo gallery</h2>
      <svg width="137" height="9" viewBox="0 0 137 9" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1 4.60869C4.375 0.520409 11.125 0.520409 14.5 4.60869C17.875 8.69698 24.625 8.69698 28 4.60869C31.375 0.520409 38.125 0.520409 41.5 4.60869C44.875 8.69698 51.625 8.69698 55 4.60869C58.375 0.520409 65.125 0.520409 68.5 4.60869C71.875 8.69698 78.625 8.69698 82 4.60869C85.375 0.520409 92.125 0.520409 95.5 4.60869C98.875 8.69698 105.625 8.69698 109 4.60869C112.375 0.520409 119.125 0.520409 122.5 4.60869C125.875 8.69698 132.625 8.69698 136 4.60869" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <Slider className='slider' {...settings}>
         {images.map((image, index) => (
         <div key={index}>
            <img className='slider-img' src={image} alt={`Image ${index}`} />
         </div>
         ))}
      </Slider>
   </section>
</main>
);
};
export default Gallery;