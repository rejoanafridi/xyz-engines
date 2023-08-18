/* eslint-disable react/prop-types */
const MaxMinInput = ({ placeholder, type, onInputChange, value }) => {
  return (
    <div className='mr-2'>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onInputChange(type, e.target.value)}
        className='w-20 px-2 py-1 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
      />
    </div>
  );
};

export default MaxMinInput;
