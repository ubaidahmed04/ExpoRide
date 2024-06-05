// // GlobalContext.js
// import React, { createContext, useState } from 'react';

// const GlobalContext = createContext<Partial<any>>({});

// const GlobalProvider = ({ children }:any) => {
//   const [state, setState] = useState({
//     firstLocation: null,
//     secontLocation: null
//   });

//   const updateFirstPoint = (firstLocation : any) => {
//     setState((prevState) => ({ ...prevState, firstLocation }));
//   };

//   return (
//     <GlobalContext.Provider value={{ state, updateFirstPoint }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export { GlobalContext, GlobalProvider };

import React, { createContext, useState } from 'react';

type StateType = {
  firstLocation: any;
  secondLocation: any;
};

const GlobalContext = createContext<Partial<any>>({});

const GlobalProvider = ({ children }: any) => {
  const [state, setState] = useState<StateType>({
    firstLocation: null,
    secondLocation: null
  });

  const updateFirstLocation = (firstLocation: any) => {
    setState((prevState) => ({ ...prevState, firstLocation }));
  };

  const updateSecondLocation = (secondLocation: any) => {
    setState((prevState) => ({ ...prevState, secondLocation }));
  };

  return (
    <GlobalContext.Provider value={{ state, updateFirstLocation, updateSecondLocation }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
