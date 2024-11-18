// import React from 'react';
// import SearchInput from './SearchInput';
// import Conversations from './Conversations';
// import LogoutButton from './LogoutButton';

// const Sidebar = () => {
//   return (
//     <div className="w-80 h-screen bg-white/10 backdrop-blur-md border-r border-white/20 p-4 flex flex-col">
//       <SearchInput />
//       <div className="divider my-4 px-3 before:bg-white/10 after:bg-white/10"></div>
//       <Conversations />
//       <LogoutButton/>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className="w-full sm:w-80 lg:w-96 h-screen bg-white/10 backdrop-blur-md border-r border-white/20 p-2 sm:p-3 lg:p-4 flex flex-col gap-2 sm:gap-3 lg:gap-4">
      {/* Fixed height header section */}
      <div className="flex-none">
        <SearchInput />
        <div className="divider my-2 sm:my-3 lg:my-4 px-2 sm:px-3 before:bg-white/10 after:bg-white/10"></div>
      </div>
      
      {/* Scrollable conversations with explicit height calculation */}
      <div className="h-[calc(100vh-160px)] sm:h-[calc(100vh-180px)] lg:h-[calc(100vh-200px)] overflow-y-auto">
        <Conversations />
      </div>
      
      {/* Fixed footer section */}
      <div className="flex-none mt-auto">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;