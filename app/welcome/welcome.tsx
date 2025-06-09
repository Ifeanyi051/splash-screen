

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

  useEffect(() => {
    gsap.to(windowOne.current, {
      duration: 1,
      x: -500,
    });

    gsap.to(windowTwo.current, {
      duration: 1,
      x: 500,
    });


  }, []);

  return (
    <main className="overflow-hidden h-screen w-screen relative">
      <div className="overflow-hidden h-full w-full relative">
        <img
          src="Rectangle33.svg"
          alt=""
          className="h-[150vh] w-[150vw] absolute left-[-45vw] top-0 z-[2] rotate-[25deg] scale-125"
          ref={windowOne}
        />
        <img
          src="Rectangle34.svg"
          alt=""
          className="h-[150vh] w-[150vw] absolute right-[-55vw] top-0 rotate-[25deg] translate-x-[-150px] scale-125"
          ref={windowTwo}
        />
      </div>

      <div>
        <h1>Welcome</h1>
      </div>
    </main>
  );
}
