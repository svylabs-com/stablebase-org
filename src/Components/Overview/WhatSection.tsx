// import React, { useEffect, useState } from 'react';

// const WhatSection: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const section = document.getElementById('WHAT');
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
//     <div id="WHAT" className="my-8 py-10 px-6 md:px-20">
//       <h2 className="text-3xl font-bold mb-4">WHAT</h2>
//       <p
//         className={`text-lg transition-all duration-700 ease-in-out ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}
//       >
//         StableBase is a stablecoin protocol based on the Collateralized Debt Position (CDP) mechanism. It innovates price stability with pre-paid Shielding Rate and user-defined Reserve Ratio, providing flexibility and predictability in borrowing.
//       </p>
//     </div>
//   );
// };

// export default WhatSection;


import React, { useEffect, useState } from 'react';

const WhatSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('WHAT');
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
    <div id="WHAT" className="my-16 py-16 px-6 md:px-32 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-lg shadow-xl">
      <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wider">WHAT</h2>
      <p
        className={`text-xl text-gray-200 leading-relaxed transition-all duration-1000 ease-in-out transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        StableBase is a stablecoin protocol based on the Collateralized Debt Position (CDP) mechanism. It innovates price stability with pre-paid Shielding Rate and user-defined Reserve Ratio, providing flexibility and predictability in borrowing.
      </p>
    </div>
  );
};

export default WhatSection;
