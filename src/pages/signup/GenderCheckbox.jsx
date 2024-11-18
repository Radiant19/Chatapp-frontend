// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-test'> Male </span>
//                 <input type='checkbox' className='checkbox border-slate-900'/>
//             </label>
//         </div>
//         <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-test'> Female </span>
//                 <input type='checkbox' className='checkbox border-slate-900'/>
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox

import React from 'react';

const GenderCheckbox = ({  onCheckboxChange , selectedGender}) => {
  return (
    <div className="flex items-center gap-6">
      <label className="text-sm font-medium text-gray-200">Gender</label>
      <div className="flex gap-4">
        <label className={`flex items-center gap-1 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange('male')}
            className="w-4 h-4 text-sky-500 focus:ring-sky-400 focus:ring-offset-0 border-gray-300/30 bg-white/5"
          />
          <span className="text-gray-200">Male</span>
        </label>
        <label className={`flex items-center gap-1 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange('female')}
            className="w-4 h-4 text-sky-500 focus:ring-sky-400 focus:ring-offset-0 border-gray-300/30 bg-white/5"
          />
          <span className="text-gray-200">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;