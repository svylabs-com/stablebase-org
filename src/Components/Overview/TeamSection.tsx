// import React, { useEffect, useState } from 'react';

// const TeamSection: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const section = document.getElementById('TEAM');
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
//     <div id="TEAM" className="my-8 py-10 px-6 md:px-20">
//       <h2 className="text-3xl font-bold mb-4">TEAM</h2>
//       <p
//         className={`text-lg transition-all duration-700 ease-in-out ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}
//       >
//         Team: The StableBase protocol is developed by experts in blockchain technology and DeFi. They are focused on providing a secure and stable borrowing experience to both advanced users and everyday borrowers.
//       </p>
//     </div>
//   );
// };

// export default TeamSection;



import React, { useEffect, useState } from 'react';

const TeamSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('TEAM');
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
    <div id="TEAM" className="my-16 py-16 px-6 md:px-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg shadow-xl">
      <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wider">TEAM</h2>
      <p
        className={`text-xl text-gray-200 leading-relaxed transition-all duration-1000 ease-in-out transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        Team: The StableBase protocol is developed by experts in blockchain technology and DeFi. They are focused on providing a secure and stable borrowing experience to both advanced users and everyday borrowers.
      </p>
    </div>
  );
};

export default TeamSection;
