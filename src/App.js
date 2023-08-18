import { useState } from 'react';
import Step1Form from './components/Step1Form';
import Step2Form from './components/Step2Form';
import ResultPage from './components/ResultPage';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    client: '',
    contractor: '',
  });

  const [result, setResult] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className='container-xl mx-auto'>
      <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
        <div className=' w-1/2 bg-white rounded shadow p-12 mx-5 '>
          <div className='flex justify-center items-center mb-8'>
            <div className='flex items-center justify-between '>
              {step > 2 ? (
                ''
              ) : (
                <>
                  <div
                    className={`h-12 w-12 rounded-full flex items-center justify-center ${
                      step === 1 ? 'bg-indigo-600 text-white' : 'bg-gray-300'
                    }`}
                  >
                    1
                  </div>
                  <div className='h-1 w-16 bg-gray-300'></div>
                  <div
                    className={`h-12 w-12 rounded-full flex items-center justify-center ${
                      step === 2 ? 'bg-indigo-600 text-white' : 'bg-gray-300'
                    }`}
                  >
                    2
                  </div>
                </>
              )}
            </div>
          </div>
          <div className='mb-8'>
            {step === 1 && (
              <Step1Form
                formData={formData}
                onInputChange={handleInputChange}
              />
            )}
            {step === 2 && (
              <Step2Form formDataOne={formData} setResult={setResult} />
            )}
            {step === 3 && <ResultPage result={result} />}
          </div>
          <div className='flex justify-between'>
            {step > 1 && (
              <button
                className='px-4 py-2 bg-indigo-600 text-white rounded'
                onClick={handlePrevStep}
              >
                Previous
              </button>
            )}
            {step < 3 &&
              (step === 2 ? (
                <button
                  className='px-4 py-2 bg-indigo-600 text-white rounded'
                  onClick={handleNextStep}
                >
                  Result
                </button>
              ) : (
                <button
                  className='px-4 py-2 bg-indigo-600 text-white rounded'
                  onClick={handleNextStep}
                >
                  Next
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
