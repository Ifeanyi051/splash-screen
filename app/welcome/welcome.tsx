

// export function Welcome() {
//   return (
//     <main className="">
//       <div className="overflow-x-hidden overflow-y-hidden">
//         {/* <div className="first-anime">
//           <img src="Rectangle33.svg" alt="" className="h-[150vh] min-w-[150vw] absolute left-[-45vw] z-[2]"/>
//           <img src="Rectangle34.svg" alt="" className="h-[150vh] min-w-[150vw] absolute right-[-40vw]"/>
//         </div> */}


//         <div className="overflow-x-hidden overflow-y-hidden h-[100vh] w-[100vw]">
//           <img src="Rectangle33.svg" alt="" className="h-[150vh] min-w-[100vw] absolute left-[-45vw] z-[2] translate-x-[-30px] rotate-[25deg] scale-155"/>
//           <img src="Rectangle34.svg" alt="" className="h-[150vh] min-w-[100vw] absolute right-[-55vw] translate-x-[-100px] rotate-[25deg] scale-155"/>
//         </div>
//       </div>
//     </main>
//   );
// }


import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Welcome() {
  const windowOne = useRef(null);
  const windowTwo = useRef(null);
  const windowWelcome = useRef(null);
  const windowCover = useRef(null);
  

  useEffect(() => {

    gsap.to(windowOne.current, {
      rotate: 29,
      duration: 1,
      delay: .3
    });

    gsap.to(windowTwo.current, {
      rotate: 29,
      duration: 1,
      delay: .3
    });



    gsap.to(windowOne.current, {
      duration: 1,
      x: -500,
      delay: 1.5
    });

    gsap.to(windowTwo.current, {
      duration: 1,
      x: 500,
      delay: 1.5
    });

    gsap.to(windowWelcome.current, {
      duration: 1,
      scale: 1.2,
      opacity: 1,
      delay: 1.5
    });

    gsap.to(windowCover.current, {
      duration: 1,
      scale: 5,
      opacity: 1,
      delay: 3
    });


  }, []);

  return (
    <main className="overflow-hidden h-screen w-screen relative bg-[white]">

      <div className='h-full w-full hidden sm:block'>
        <div className='h-full w-full flex justify-center items-center'>
          <h1 className='text-[#884DD4] text-[36px] font-bold'>View with a mobile device</h1>
        </div>
      </div>
      <div className="overflow-hidden h-full w-full relative block sm:hidden">
        <img
          src="Rectangle33.svg"
          alt=""
          className="h-[120vh] min-w-[150vw] absolute left-[-45vw] top-[-60px] z-[2] scale-125"
          ref={windowOne}
        />
        <img
          src="Rectangle34.svg"
          alt=""
          className="h-[120vh] min-w-[150vw] absolute right-[-55vw] translate-x-[-50px] top-[-60px] scale-125"
          ref={windowTwo}
        />
        <div className='flex justify-center items-center h-full w-full'>
          <h1 ref={windowWelcome} className='text-[36px] font-bold text-[#884DD4] scale-50 opacity-0'>Welcome</h1>
          <div ref={windowCover} className='bg-[#884DD4] min-h-[300px] min-w-[300px] absolute scale-0 rounded-full'>
            
          </div>
        </div>

        
      </div>

      
    </main>
  );
}
