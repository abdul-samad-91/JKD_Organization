"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

function readibleDate(isoDate) {
    const date = new Date(isoDate);

    const onlyDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    });

    return onlyDate;
}



const GenericTable = ({ headers,  data, currentTheme, onEdit, onDelete }) => {

  return (
    <>
    <table className=" border-collapse overflow-scroll border border-gray-300 w-full overflow-x-auto whitespace-nowrap">
      <thead className='text-sm'>
        {/* top Header */}
      <tr>
          {headers.map((header, index) => (
                <th
                  key={index}
                  className={`${currentTheme === 'dark' ? 'bg-[#404040]' : 'bg-[#F0FFF8]'
                    } ${currentTheme === 'dark' ? 'text-white' : 'text-black'
                    } border-b px-4 py-2`}
                >
                  {header}
                </th> 
          ))}
          </tr>
      </thead>

      {/* tabel data */}
      <tbody>
        {data?.length > 0 ? (
          data?.map((item, idx) => (
            <tr
              key={idx}
              className={`hover:bg-gray-100 ${currentTheme === 'dark' ? 'hover:bg-[#404052]' : ''
                }`}
            >
              {headers.map((header, index) => {
                // if (header.toLowerCase() === 'actions') {
                //   return (
                //     <td
                //       key={index}
                //       className={`px-4 py-2 ${currentTheme === 'dark' ? 'text-white' : 'text-black'
                //         } text-center`}
                //     >
                //       <FontAwesomeIcon
                //         icon={faEdit}
                //         className="text-green-500 mr-2 cursor-pointer"
                //         onClick={() => onEdit(item)}
                //       />
                //       <FontAwesomeIcon
                //         icon={faTrash}
                //         className="text-red-500 cursor-pointer"
                //         onClick={() => onDelete(item)}
                //       />
                //     </td>
                //   );
                // }

                if (header.toLowerCase() === 'cnicpictureurl') {
                return (
                  <td
                  className='text-center'
                    key={index}
                    >
                        <a href={item[header]} target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}> CNIC  Pic</a>
                    </td>
                )
                }

                if (header.toLowerCase() === 'qualificationurl') {
                    return (
                    <td
                    className='text-center'
                        key={index}
                        >
                            <a href={item[header]} target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}> Qualification Pic</a>
                        </td>
                    )
                }

                if (header.toLowerCase() === 'passportsizepicurl') {
                    return (
                        <td
                        className='text-center'
                            key={index}
                            >
                            <a href={item[header]} target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}> Student Pic</a>
                        </td>
                    )
                }

                if (header.toLowerCase() === 'passporturl') {
                    return (
                        <td
                        className='text-center'
                            key={index}
                            >
                            <a href={item[header]} target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}> passport Pic</a>
                        </td>
                    )
                }

                if (header.toLowerCase() === 'dateofbirth') {
                return (
                  <td
                    key={index}
                    >
                        {readibleDate(item[header])}
                    </td>
                )
                }

                return (
                  <td
                    key={index}
                    className={`px-4 py-2 ${currentTheme === 'dark' ? 'text-white' : 'text-black'
                      } text-center`}
                  >
                    {item[header]}
                  </td>
                );
              })}
            </tr>
          )))
          : (
            <tr>
              <td colSpan={headers.length} className="px-4 py-2 text-center text-gray-500">
                no form submitted
              </td>
            </tr>
          )}

      </tbody>
    </table>
    </>
);
};

export default GenericTable;