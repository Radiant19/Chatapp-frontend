

// import React from 'react';
// import { BiLogOut } from "react-icons/bi";
// import useLogout from '../../hooks/useLogout';

// const LogoutButton = () => {

//   const {logout} = useLogout();

//   return (
//     <button 
//       className="mt-auto flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
//      >
//       <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
//       <span>Logout</span>
//     </button>
//   );
// };

// export default LogoutButton;

import React from 'react';
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { logout } = useLogout();

  return (
    <button
      onClick={logout}
      className="w-full flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-all duration-200"
    >
      <BiLogOut className="w-5 h-5" />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
