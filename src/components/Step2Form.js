/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
// const Step2Form = ({ formData }) => {
//   return (
//     <div className='p-4'>
//       <h2 className='text-xl mb-4'>Step 2: Additional Details</h2>
//       <div className='mb-4'>
//         <label className='block font-semibold'>Project Name:</label>
//         <input
//           type='text'
//           id='projectName'
//           value={formData.projectName}
//           disabled
//           className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
//         />
//       </div>
//       <div className='mb-4'>
//         <label className='block font-semibold'>Project Description:</label>
//         <input
//           type='text'
//           id='projectDescription'
//           value={formData.projectDescription}
//           disabled
//           className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
//         />
//       </div>
//       <div className='mb-4'>
//         <label className='block font-semibold'>Project Description:</label>
//         <input
//           type='text'
//           id='client'
//           value={formData.client}
//           disabled
//           className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
//         />
//       </div>
//       <div>
//         <label className='block font-semibold'>Project Description:</label>
//         <input
//           type='text'
//           id='contractor'
//           value={formData.contractor}
//           disabled
//           className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
//         />
//       </div>
//     </div>
//   );
// };

// export default Step2Form;

// import { useState } from 'react';
// import Papa from 'papaparse'; // Import the CSV parsing library
// import MaxMinInput from '../utils/MaxMinInput';

// const Step2Form = ({ formDataOne, onInputChange }) => {
//   const [csvFile, setCsvFile] = useState(null);
//   console.log(csvFile);
//   const [formData, setFormData] = useState({
//     min_X: '',
//     max_X: '',
//     min_Y: '',
//     max_Y: '',
//     min_Z: '',
//     max_Z: '',
//   });

//   const handleInputChange = (field, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
//   };

//   const handleCsvUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setCsvFile(file);
//       Papa.parse(file, {
//         complete: (result) => {
//           if (result.data && result.data.length > 1) {
//             const [headerRow, ...dataRows] = result.data;
//             const [KP, X, Y, Z] = headerRow;

//             const xValues = dataRows.map((row) => parseFloat(row[X]));
//             const yValues = dataRows.map((row) => parseFloat(row[Y]));
//             const zValues = dataRows.map((row) => parseFloat(row[Z]));

//             const max_X = Math.max(...xValues);
//             const min_X = Math.min(...xValues);
//             const max_Y = Math.max(...yValues);
//             const min_Y = Math.min(...yValues);
//             const max_Z = Math.max(...zValues);
//             const min_Z = Math.min(...zValues);

//             handleInputChange('max_X', max_X);
//             handleInputChange('min_X', min_X);
//             handleInputChange('max_Y', max_Y);
//             handleInputChange('min_Y', min_Y);
//             handleInputChange('max_Z', max_Z);
//             handleInputChange('min_Z', min_Z);
//           }
//         },
//       });
//     }
//   };

//   return (
//     <div className='p-4'>
//       <div className='p-4'>
//         <h2 className='text-xl mb-4'>Step 2: Additional Details</h2>
//         <div className='mb-4'>
//           <label className='block font-semibold'>Project Name:</label>
//           <input
//             type='text'
//             id='projectName'
//             value={formDataOne.projectName}
//             disabled
//             className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
//           />
//         </div>
//         <div className='mb-4'>
//           <label className='block font-semibold'>Project Description:</label>
//           <input
//             type='text'
//             id='projectDescription'
//             value={formDataOne.projectDescription}
//             disabled
//             className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
//           />
//         </div>
//         <div className='mb-4'>
//           <label className='block font-semibold'>Project Description:</label>
//           <input
//             type='text'
//             id='client'
//             value={formDataOne.client}
//             disabled
//             className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
//           />
//         </div>
//         <div>
//           <label className='block font-semibold'>Project Description:</label>
//           <input
//             type='text'
//             id='contractor'
//             value={formDataOne.contractor}
//             disabled
//             className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
//           />
//         </div>
//       </div>
//       {/* ... Other input fields ... */}
//       <div className='mb-4'>
//         <label htmlFor='csvFile' className='block font-semibold'>
//           Upload CSV File:
//         </label>
//         <input
//           type='file'
//           id='csvFile'
//           accept='.csv'
//           onChange={handleCsvUpload}
//           className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
//         />
//       </div>
//       {/* Display CSV Data in Input Fields */}
//       {csvFile && (
//         <div>
//           <label className='block font-semibold'>CSV Data:</label>
//           {formData?.map((row, index) => (
//             <div key={index} className='flex'>
//               <input
//                 type='text'
//                 placeholder={`X ${index + 1}`}
//                 value={row.X}
//                 onChange={(e) =>
//                   onInputChange(`csvData[${index}].X`, e.target.value)
//                 }
//                 className='w-20 px-2 py-1 mr-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
//               />
//               {/* ... Other input fields for Y, Z ... */}
//             </div>
//           ))}
//         </div>
//       )}
//       {/* Manual Input for Min-Max Values */}
//       {!csvFile && (
//         <div>
//           <label className='block font-semibold'>Manual Min-Max Values:</label>
//           <div className='flex flex-col gap-5'>
//             <div className='flex'>
//               <MaxMinInput
//                 type='number'
//                 placeholder='Min X'
//                 value={formData.min_X}
//                 onInputChange={handleInputChange}
//               />
//               <MaxMinInput
//                 type='number'
//                 placeholder='Max Y'
//                 value={formData.max_Y}
//                 onInputChange={handleInputChange}
//               />
//             </div>
//             <div className='flex'>
//               <MaxMinInput
//                 type='number'
//                 placeholder='Min Y'
//                 value={formData.min_Y}
//                 onInputChange={handleInputChange}
//               />
//               <MaxMinInput
//                 type='number'
//                 placeholder='Max Y'
//                 value={formData.max_Y}
//                 onInputChange={handleInputChange}
//               />
//             </div>

//             <div className='flex'>
//               <MaxMinInput
//                 type='number'
//                 placeholder='Min Z'
//                 value={formData.min_Z}
//                 onInputChange={handleInputChange}
//               />
//               <MaxMinInput
//                 type='number'
//                 placeholder='Max Z'
//                 value={formData.max_Z}
//                 onInputChange={handleInputChange}
//               />
//             </div>
//             {/* ... Other input fields for min-max ... */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Step2Form;
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Papa from 'papaparse'; // Import the CSV parsing library
import MaxMinInput from '../utils/MaxMinInput';

const Step2Form = ({ formDataOne, setResult }) => {
  const { setValue, getValues } = useForm();
  const [loading, setLoading] = useState(false); // Loading state for CSV processing
  const [csvFile, setCsvFile] = useState(false); // Loading state for CSV processing

  const handleCsvUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCsvFile(file);
      setLoading(true);
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          if (result.data && result.data.length > 0) {
            const csvData = result.data.map((row) => ({
              X: row.x || row.X,
              Y: row.y || row.Y,
              Z: row.z || row.Z,
            }));

            setValue('csvData', csvData);
            // for passing data to show in result page
            setResult(csvData);
            setLoading(false);
          }
        },
      });
    }
  };

  const formData = getValues(); // Get form data for CSV fields
  const min_X = formData.csvData
    ? Math.min(
        ...formData.csvData.map((row) => {
          return parseFloat(row.X);
        }),
      )
    : null;
  const max_X = formData.csvData
    ? Math.max(
        ...formData.csvData.map((row) => {
          return parseFloat(row.X);
        }),
      )
    : null;
  const min_Y = formData.csvData
    ? Math.min(
        ...formData.csvData.map((row) => {
          return parseFloat(row.Y);
        }),
      )
    : null;
  const max_Y = formData.csvData
    ? Math.max(
        ...formData.csvData.map((row) => {
          return parseFloat(row.Y);
        }),
      )
    : null;
  const min_Z = formData.csvData
    ? Math.min(
        ...formData.csvData.map((row) => {
          return parseFloat(row.Z);
        }),
      )
    : null;
  const max_Z = formData.csvData
    ? Math.max(
        ...formData.csvData.map((row) => {
          return parseFloat(row.Z);
        }),
      )
    : null;

  return (
    <div className='p-4'>
      <h2 className='text-xl mb-4'>Step 2: Additional Details</h2>
      <div className='mb-4'>
        <label className='block font-semibold'>Project Name:</label>
        <input
          type='text'
          id='projectName'
          value={formDataOne.projectName}
          disabled
          className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
        />
      </div>
      <div className='mb-4'>
        <label className='block font-semibold'>Project Description:</label>
        <input
          type='text'
          id='projectDescription'
          value={formDataOne.projectDescription}
          disabled
          className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
        />
      </div>
      <div className='mb-4'>
        <label className='block font-semibold'>Client:</label>
        <input
          type='text'
          id='client'
          value={formDataOne.client}
          disabled
          className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
        />
      </div>
      <div>
        <label className='block font-semibold'>Contractor:</label>
        <input
          type='text'
          id='contractor'
          value={formDataOne.contractor}
          disabled
          className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='csvFile' className='block font-semibold'>
          Upload CSV File:
        </label>
        <input
          type='file'
          id='csvFile'
          accept='.csv'
          onChange={handleCsvUpload}
          className='w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-300'
        />
      </div>
      {loading ? (
        <p>Loading CSV data...</p>
      ) : (
        <div>
          {/* Display CSV Data in Input Fields */}
          <div>
            {formData.csvData && (
              <>
                <label className='block font-semibold'>CSV File Values:</label>

                <div className='flex justify-between mt-5'>
                  <span className='block font-semibold'>Min Value</span>
                  <span className='block font-semibold'>Max Value</span>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='flex justify-between'>
                    <MaxMinInput
                      type='number'
                      placeholder='Min X'
                      value={min_X}
                    />
                    <MaxMinInput
                      type='number'
                      placeholder='Max Y'
                      value={max_X}
                    />
                  </div>
                  <div className='flex justify-between'>
                    <MaxMinInput
                      type='number'
                      placeholder='Min Y'
                      value={min_Y}
                    />
                    <MaxMinInput
                      type='number'
                      placeholder='Max Y'
                      value={max_Y}
                    />
                  </div>

                  <div className='flex justify-between'>
                    <MaxMinInput
                      type='number'
                      placeholder='Min Z'
                      value={min_Z}
                    />
                    <MaxMinInput
                      type='number'
                      placeholder='Max Z'
                      value={max_Z}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          {/* Display minimum value of X
          {min_X !== null && <p>Minimum value of X: {min_X}</p>}
          {min_X !== null && <p>Maximum value of X: {max_X}</p>} */}
        </div>
      )}

      {/* Manual Input for Min-Max Values */}
      {!csvFile && (
        <div>
          <label className='block font-semibold'>Manual Input Values:</label>
          <div className='flex justify-between mt-5'>
            <span className='block font-semibold'>Min Value</span>
            <span className='block font-semibold'>Max Value</span>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex  justify-between'>
              <MaxMinInput
                type='number'
                placeholder='Min X'
                value={formData.min_X}
              />
              <MaxMinInput
                type='number'
                placeholder='Max Y'
                value={formData.max_Y}
              />
            </div>
            <div className='flex justify-between'>
              <MaxMinInput
                type='number'
                placeholder='Min Y'
                value={formData.min_Y}
              />
              <MaxMinInput
                type='number'
                placeholder='Max Y'
                value={formData.max_Y}
              />
            </div>

            <div className='flex justify-between'>
              <MaxMinInput
                type='number'
                placeholder='Min Z'
                value={formData.min_Z}
              />
              <MaxMinInput
                type='number'
                placeholder='Max Z'
                value={formData.max_Z}
              />
            </div>
            {/* ... Other input fields for min-max ... */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Step2Form;
