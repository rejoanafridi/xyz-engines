/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Step1Form = ({ formData, onInputChange }) => {
  return (
    <div className=''>
      <h2 className='text-xl mb-4'>Step 1: Project Details</h2>
      <div className='mb-4'>
        <label className='block font-semibold'>Project Name:</label>
        <input
          type='text'
          id='projectName'
          value={formData.projectName}
          placeholder='Enter Project Name'
          onChange={(e) => onInputChange('projectName', e.target.value)}
          className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
        />
      </div>
      <div className='mb-4'>
        <label className='block font-semibold'>Project Description:</label>
        <input
          type='text'
          id='projectDescription'
          value={formData.projectDescription}
          placeholder='Enter Project Description'
          onChange={(e) => onInputChange('projectDescription', e.target.value)}
          className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
        />
      </div>
      <div className='mb-4'>
        <label className='block font-semibold'>Client:</label>
        <input
          type='text'
          id='client'
          placeholder='Enter Client Name'
          value={formData.client}
          onChange={(e) => onInputChange('client', e.target.value)}
          className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
        />
      </div>
      <div>
        <label className='block font-semibold'>Contractor:</label>
        <input
          type='text'
          id='contractor'
          placeholder='Enter Contact Person Name'
          value={formData.contractor}
          onChange={(e) => onInputChange('contractor', e.target.value)}
          className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
        />
      </div>
    </div>
  );
};

export default Step1Form;
