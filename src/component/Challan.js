import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

// This is the structure based on your "Cash Receipt Voucher" image.
const Challan = ( { challanData }) => {
  const componentRef = useRef();
  const { regNo, date, totalAmount, particularList, balance  , applicationId} = challanData;
 const { name, FatherName, chooseCourse } = applicationId || {};  
  // A list of items for the 'PARTICULARS' section
  const particulars = particularList || [
    { label: 'Registration Fee', amount: 5000 },
    { label: 'Admission Fee', amount: 2000 },
    { label: ` Course Fee`, amount: 15000 }, // Dynamically include the course
  ];

    const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Applicant Challan",
  });

  return (
    <>
      <button
        onClick={handlePrint}
        className="px-3 py-2 bg-blue-500 text-white rounded my-3"
      >
        Print Challan
      </button>

    <div 
      ref={componentRef} 
      className="p-8 border-4 border-gray-900 mx-auto max-w-2xl bg-white shadow-xl"
    >
      <h1 className="text-3xl font-bold text-center mb-4">JKD Pakistan</h1>
      <h2 className="text-xl font-bold text-center uppercase mb-8">CASH RECEIPT VOUCHER</h2>

      {/* Header Details */}
      <div className="flex justify-between text-sm mb-4">
        <div>
          <span className="font-semibold">Reg. No:</span> <span className="underline">{regNo || '818'}</span>
        </div>
        <div>
          <span className="font-semibold">Date:</span> <span className="underline">{date || new Date().toISOString().slice(0, 10)}</span>
        </div>
      </div>
      <div className="flex justify-between text-sm mb-6">
        <div>
          <span className="font-semibold">Name:</span> <span className="underline">{name || 'Test User'}</span>
        </div>
        <div>
          <span className="font-semibold">Father`s Name:</span> <span className="underline">{FatherName || 'Test Father'}</span>
        </div>
        <div>
          <span className="font-semibold">Unit:</span> <span className="underline">---</span>
        </div>
      </div>

      {/* Particulars Table */}
      <table className="w-full border-collapse border border-gray-400 mb-8">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="border border-gray-400 p-2 text-left w-3/4">PARTICULARS</th>
            <th className="border border-gray-400 p-2 text-right w-1/4">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {particulars.map((item, index) => (
            <tr key={index} className="odd:bg-gray-50">
              <td className="border border-gray-400 p-2">{item.label}</td>
              <td className="border border-gray-400 p-2 text-right">{item.amount.toLocaleString()}</td>
            </tr>
          ))}
          {/* Add empty rows for a standardized size */}
          {[...Array(8 - particulars.length)].map((_, i) => (
            <tr key={`empty-${i}`}>
              <td className="border border-gray-400 p-2 h-8"></td>
              <td className="border border-gray-400 p-2 h-8"></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total and Balance */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="font-bold">TOTAL AMOUNT:</span>
          <span className="border-b border-black font-bold px-4">{totalAmount.toLocaleString() || '22,000'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">RECEIVED:</span>
          <span className="border-b border-black font-bold px-4">---</span>
        </div>
        {/* <div className="flex justify-between">
          <span className="font-bold">BALANCE:</span>
          <span className="border-b border-black font-bold px-4">{balance || '0'}</span>
        </div> */}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-gray-300 flex justify-between text-xs">
        <p className="w-1/2">
          **Note:** Fee once paid will not be refundable
        </p>
        <div className="text-center">
          <span className="block border-t border-black w-32 mt-6">Accountant Sign</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Challan;

