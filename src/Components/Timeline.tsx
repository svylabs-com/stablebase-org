import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Images for the timeline items (reused)
import murielImage from '../assets/clients-image/muriel.png';
import johnImage from '../assets/clients-image/john.png';
import clayImage from '../assets/clients-image/clay.png';
import dougImage from '../assets/clients-image/doug.png';

const Timeline: React.FC = () => {
    const timelineItems = [
        {
            date: 'January 2024',
            content: 'Started working on the project and set initial goals.',
            image: murielImage,
        },
        {
            date: 'February 2024',
            content: 'Conducted market research and gathered feedback.',
            image: johnImage,
        },
        {
            date: 'March 2024',
            content: 'Completed the first phase of development.',
            image: clayImage,
        },
        {
            date: 'April 2024',
            content: 'Introduced new features based on user feedback.',
            image: dougImage,
        },
        {
            date: 'May 2024',
            content: 'Finalized the product design and user interface.',
            image: murielImage,
        },
        {
            date: 'June 2024',
            content: 'Launched the beta version for testing.',
            image: johnImage,
        },
        {
            date: 'July 2024',
            content: 'Gathered user feedback and iterated on features.',
            image: clayImage,
        },
        {
            date: 'August 2024',
            content: 'Enhanced performance and fixed bugs from beta.',
            image: dougImage,
        },
        {
            date: 'September 2024',
            content: 'Received user feedback and made improvements.',
            image: murielImage,
        },
        {
            date: 'October 2024',
            content: 'Officially launched the product to the public.',
            image: johnImage,
        },
    ];

    return (
        <section className="my-10">
            <h2 className="text-center text-2xl font-bold mb-5">Project Timeline</h2>
            <div className="relative">
                {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full border-t border-gray-300" />
        </div> */}
                <Swiper
                    className='bg-slate-100'
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {timelineItems.map((item, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center my-5 lg:my-8">
                            <div className="flex flex-col items-center">
                                <img src={item.image} alt={`Timeline item ${index + 1}`} className="w-32 h-32 object-cover rounded-full border-2 border-blue-600" />
                                <h3 className="font-semibold text-lg text-blue-600">{item.date}</h3>
                                <p className="text-center text-gray-600">{item.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Timeline;