/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from '../utils/PdfFocument';

const ResultPage = ({ result }) => {
  const [pdfGenerated, setPdfGenerated] = useState(false);
  const [loadingPdf, setLoadingPdf] = useState(false);

  const handlePdfGenerated = () => {
    setLoadingPdf(true);

    // Simulating a delay to show loading state
    setTimeout(() => {
      setPdfGenerated(true);
      setLoadingPdf(false);
    }, 10000); // Adjust the delay time as needed
  };

  return (
    <>
      <h2 className='text-xl mb-4'>Result</h2>
      <div className='overflow-x-auto rounded-lg border border-gray-200'>
        <div className='max-h-96 overflow-y-scroll'>
          <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
            <thead className='ltr:text-left rtl:text-right'>
              <tr>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  PK
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  X
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  Y
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  Z
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {result.map((row, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                      {index}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                      {row.X}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                      {row.Y}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                      {row.Z}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='my-4 text-center '>
        <div className='flex justify-between'>
          <button
            onClick={handlePdfGenerated}
            disabled={loadingPdf}
            className={`${
              loadingPdf ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'
            } text-white px-4 py-2 rounded`}
          >
            {loadingPdf ? 'Generating PDF...' : 'Generate PDF'}
          </button>
          {pdfGenerated && (
            <button>
              <PDFDownloadLink
                document={<PdfDocument result={result} />}
                fileName='result.pdf'
              >
                {({ blob, url, loading, error }) =>
                  loading
                    ? 'Generating PDF...'
                    : error
                    ? 'Error generating PDF'
                    : 'Download PDF'
                }
              </PDFDownloadLink>
            </button>
          )}
        </div>
        {loadingPdf && (
          <p className='text-center'>
            Generating PDF it takes 10-30 second, please wait...
          </p>
        )}
      </div>
    </>
  );
};

export default ResultPage;
