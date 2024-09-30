// import React, { useEffect, useState } from 'react';

// const WhySection: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const section = document.getElementById('WHY');
//     const sectionPosition = section?.getBoundingClientRect();
//     if (sectionPosition && sectionPosition.top < window.innerHeight - 100) {
//       setIsVisible(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div id="WHY" className="my-8 py-10 px-6 md:px-20">
//       <h2 className="text-3xl font-bold mb-4">WHY</h2>
//       <p
//         className={`text-lg transition-all duration-700 ease-in-out ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}
//       >
//         StableBase addresses the limitations of traditional interest-based stablecoin protocols by offering a more predictable, user-friendly borrowing model. Its tools ensure system stability and enhance user experience.
//       </p>
//     </div>
//   );
// };

// export default WhySection;


import React, { useEffect, useState } from 'react';

const WhySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('WHY');
    const sectionPosition = section?.getBoundingClientRect();
    if (sectionPosition && sectionPosition.top < window.innerHeight - 100) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="WHY" className="my-16 py-16 px-6 md:px-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-xl">
      <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wider">WHY</h2>
      <p
        className={`text-xl text-gray-200 leading-relaxed transition-all duration-1000 ease-in-out transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        StableBase addresses the limitations of traditional interest-based stablecoin protocols by offering a more predictable, user-friendly borrowing model. Its tools ensure system stability and enhance user experience.
      </p>
    </div>
  );
};

export default WhySection;
