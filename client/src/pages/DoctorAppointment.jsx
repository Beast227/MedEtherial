// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // Import axios
// import axios from 'axios';
// const DoctorAppointment = () => {
//   // Dummy data for appointments (replace with actual data)
//   const appointments = [
//     {
//       id: 1,
//       date: 'July 15, 2024',
//       time: '10:00 AM',
//       doctor: 'Dr. John Doe',
//       specialty: 'Cardiology',
//       thumbnail: 'https://ideogram.ai/assets/image/lossless/response/44ZO3YNVTjywudYiCTa5Bg', 
//     },
//     {
//       id: 2,
//       date: 'July 20, 2024',
//       time: '2:30 PM',
//       doctor: 'Dr. Melisha Smith',
//       specialty: 'Dermatology',
//       thumbnail: 'https://via.placeholder.com/150',
//     },
//     {
//       id: 3,
//       date: 'July 25, 2024',
//       time: '4:00 PM',
//       doctor: 'Dr. Michael Johnson',
//       specialty: 'Pediatrics',
//       thumbnail: 'https://ideogram.ai/assets/progressive-image/balanced/response/HoCDWG5YSVa72tH6jy7XnA', // Replace with actual doctor's image URL
//     },
//     {
//       id: 4,
//       date: 'August 2, 2024',
//       time: '11:15 AM',
//       doctor: 'Dr. Emily Brown',
//       specialty: 'Neurology',
//       thumbnail: 'https://via.placeholder.com/150', // Replace with actual doctor's image URL
//     },
//     {
//       id: 5,
//       date: 'August 10, 2024',
//       time: '3:45 PM',
//       doctor: 'Dr. William Lee',
//       specialty: 'Orthopedics',
//       thumbnail: 'https://ideogram.ai/assets/image/lossless/response/CJWvOy2iQEySE-OIZ50_Qg', // Replace with actual doctor's image URL
//     },
//     {
//       id: 6,
//       date: 'August 18, 2024',
//       time: '9:30 AM',
//       doctor: 'Dr. Sarah Johnson',
//       specialty: 'Gynecology',
//       thumbnail: 'https://via.placeholder.com/150', // Replace with actual doctor's image URL
//     },
//   ];

//   // State to manage which specialty is currently selected
//   const [selectedSpecialty, setSelectedSpecialty] = useState(null);
//   const [userEmail, setUserEmail] = useState("user@example.in")
//   // Function to handle selecting a specialty
//   const handleSelectSpecialty = (specialty) => {
//     setSelectedSpecialty(specialty === selectedSpecialty ? null : specialty);
//   };

//   const handleBooking = async (appointment) => {
//     try {
//         const res = await axios.post('http://localhost:8000/api/v1/users/doctor-appointment', {
//             email: userEmail,
//             appointmentID: appointment.id, // Adjust the appointment ID if needed
//             date: appointment.date,
//             doctor: appointment.doctor
//         });
        
//         if (res.data.success) {
//             alert("Booked Successfully");
//         } else {
//             alert("Cannot be booked");
//         }
//     } catch (error) {
//         alert("Cannot Be Booked");
//     }
// }


//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/09/22/ee/0922eed0b8cc4d35753d28c677c7eded.jpg)' }}>
//       <div className="flex flex-col justify-between items-center h-full bg-black bg-opacity-50">
//         <div className="text-center text-white py-8">
//           <h1 className="text-3xl font-bold mb-4">MAKE AN <b>APPOINTMENT</b></h1>
//           <p className="text-lg mb-8">Manage your doctor appointments here.</p>
//           <div className="flex justify-center mb-4">
//             <button
//               className={`mx-2 px-4 py-2 rounded-lg  ${selectedSpecialty === null ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
//               onClick={() => handleSelectSpecialty(null)}
//             >
//               All
//             </button>
//             <button
//               className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Cardiology' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
//               onClick={() => handleSelectSpecialty('Cardiology')}
//             >
//               Cardiology
//             </button>
//             <button
//               className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Dermatology' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
//               onClick={() => handleSelectSpecialty('Dermatology')}
//             >
//               Dermatology
//             </button>
//             <button
//               className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Pediatrics' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
//               onClick={() => handleSelectSpecialty('Pediatrics')}
//             >
//               Pediatrics
//             </button>
//             <button
//               className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Neurology' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
//               onClick={() => handleSelectSpecialty('Neurology')}
//             >
//               Neurology
//             </button>
//             <button
//               className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Orthopedics' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
//               onClick={() => handleSelectSpecialty('Orthopedics')}
//             >
//               Orthopedics
//             </button>
//             <button
//               className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Gynecology' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
//               onClick={() => handleSelectSpecialty('Gynecology')}
//             >
//               Gynecology
//             </button>
//           </div>
//           <div className="flex flex-wrap justify-center">
//             {appointments.map(appointment => (
//               (selectedSpecialty === null || appointment.specialty === selectedSpecialty) && (
//                 <div key={appointment.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
//                   <div className="bg-white bg-opacity-80 shadow-md rounded p-4 flex flex-col justify-between">
//                     <div style={{ position: 'relative' }}>
//                       <img
//                         src={appointment.thumbnail}
//                         alt="Thumbnail"
//                         className="rounded-lg w-full h-auto"
//                       />
//                     </div>
//                     <div className="mt-4">
//                       <h2 className="text-lg font-bold mb-2">
//                         <Link to={`/appointment/${appointment.id}`} className="text-black hover:text-blue-500">{appointment.date}</Link>
//                       </h2>
//                       <p className="text-gray-600">

//                       </p>
//                       <p className="text-gray-600">Doctor: {appointment.doctor}</p>
//                     </div>
//                     <div className="mt-4">
//                       <div className="w-full bg-red-500 text-white hover:bg-red-600 font-bold py-2 px-4 rounded" onClick={handleBooking}>
//                         Book Now
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             ))}
//           </div>
//         </div>
//         <div className="bg-white bg-opacity-80 shadow-md rounded p-4 flex justify-center items-center mt-8">
//           <div className="w-1/4 text-center p-4">
//             <img src="https://via.placeholder.com/50" alt="Support Icon" className="rounded-full mx-auto mb-2" style={{ maxWidth: '100%' }} />
//             <span className="text-gray-600 text-xs block">Support Us</span>
//           </div>
//           <div className="w-1/4 text-center p-4">
//             <img src="https://via.placeholder.com/50" alt="Donate Icon" className="rounded-full mx-auto mb-2" style={{ maxWidth: '100%' }} />
//             <span className="text-gray-600 text-xs block">Donate</span>
//           </div>
//           <div className="w-1/4 text-center p-4">
//             <img src="https://via.placeholder.com/50" alt="Volunteer Icon" className="rounded-full mx-auto mb-2" style={{ maxWidth: '100%' }} />
//             <span className="text-gray-600 text-xs block">Volunteer</span>
//           </div>
//           <div className="w-1/4 text-center p-4">
//             <img src="https://via.placeholder.com/50" alt="Contact Icon" className="rounded-full mx-auto mb-2" style={{ maxWidth: '100%' }} />
//             <span className="text-gray-600 text-xs block">Contact Us</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorAppointment;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DoctorAppointment = () => {
  const appointments = [
    {
      id: 1,
      date: 'July 15, 2024',
      time: '10:00 AM',
      doctor: 'Dr. John Doe',
      specialty: 'Cardiology',
      thumbnail: 'https://ideogram.ai/assets/image/lossless/response/44ZO3YNVTjywudYiCTa5Bg', 
    },
    {
      id: 2,
      date: 'July 20, 2024',
      time: '2:30 PM',
      doctor: 'Dr. Melisha Smith',
      specialty: 'Dermatology',
      thumbnail: 'https://ideogram.ai/assets/progressive-image/balanced/response/OzCYIGDpRWSO1NvK-r1b1w',
    },
    {
      id: 3,
      date: 'July 25, 2024',
      time: '4:00 PM',
      doctor: 'Dr. Michael Johnson',
      specialty: 'Pediatrics',
      thumbnail: 'https://ideogram.ai/assets/progressive-image/balanced/response/HoCDWG5YSVa72tH6jy7XnA', // Replace with actual doctor's image URL
    },
    {
      id: 4,
      date: 'August 2, 2024',
      time: '11:15 AM',
      doctor: 'Dr. Emily Brown',
      specialty: 'Neurology',
      thumbnail: 'https://ideogram.ai/assets/progressive-image/balanced/response/Jgjd4R73SG67MZWHikUZBA', // Replace with actual doctor's image URL
    },
    {
      id: 5,
      date: 'August 10, 2024',
      time: '3:45 PM',
      doctor: 'Dr. William Lee',
      specialty: 'Orthopedics',
      thumbnail: 'https://ideogram.ai/assets/image/lossless/response/CJWvOy2iQEySE-OIZ50_Qg', // Replace with actual doctor's image URL
    },
    {
      id: 6,
      date: 'August 18, 2024',
      time: '9:30 AM',
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Gynecology',
      thumbnail: 'https://ideogram.ai/assets/progressive-image/balanced/response/iHQgMqddT7G5aolGMfIM4Q', // Replace with actual doctor's image URL
    },
  ];

  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [userEmail, setUserEmail] = useState("user@example.in");
  const [bookedAppointments, setBookedAppointments] = useState([]);

  const handleSelectSpecialty = (specialty) => {
    setSelectedSpecialty(specialty === selectedSpecialty ? null : specialty);
  };

  const handleBooking = async (appointment) => {
    try {
      const res = await axios.post('http://localhost:8000/api/v1/users/doctor-appointment', {
        email: userEmail,
        appointmentID: appointment.id,
        date: appointment.date,
        doctor: appointment.doctor
      });

      if (res.data.success) {
        alert("Booked Successfully");
        setBookedAppointments([...bookedAppointments, appointment.id]);
      } else {
        alert("Cannot be booked");
      }
    } catch (error) {
      alert("Cannot Be Booked");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/09/22/ee/0922eed0b8cc4d35753d28c677c7eded.jpg)' }}>
      <div className="flex flex-col justify-between items-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white py-8">
          <h1 className="text-3xl font-bold mb-4">MAKE AN <b>APPOINTMENT</b></h1>
          <p className="text-lg mb-8">Manage your doctor appointments here.</p>
          <div className="flex justify-center mb-4">
            <button
              className={`mx-2 px-4 py-2 rounded-lg  ${selectedSpecialty === null ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
              onClick={() => handleSelectSpecialty(null)}
            >
              All
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Cardiology' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
              onClick={() => handleSelectSpecialty('Cardiology')}
            >
              Cardiology
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Dermatology' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
              onClick={() => handleSelectSpecialty('Dermatology')}
            >
              Dermatology
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Pediatrics' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
              onClick={() => handleSelectSpecialty('Pediatrics')}
            >
              Pediatrics
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Neurology' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
              onClick={() => handleSelectSpecialty('Neurology')}
            >
              Neurology
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Orthopedics' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
              onClick={() => handleSelectSpecialty('Orthopedics')}
            >
              Orthopedics
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-lg ${selectedSpecialty === 'Gynecology' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600`}
              onClick={() => handleSelectSpecialty('Gynecology')}
            >
              Gynecology
            </button>
          </div>
          <div className="flex flex-wrap justify-center">
            {appointments.map(appointment => (
              (selectedSpecialty === null || appointment.specialty === selectedSpecialty) && (
                <div key={appointment.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
                  <div className="bg-white bg-opacity-80 shadow-md rounded p-4 flex flex-col justify-between">
                    <div style={{ position: 'relative' }}>
                      <img
                        src={appointment.thumbnail}
                        alt="Thumbnail"
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                    <div className="mt-4">
                      <h2 className="text-lg font-bold mb-2">
                        <Link to={`/appointment/${appointment.id}`} className="text-black hover:text-blue-500">{appointment.date}</Link>
                      </h2>
                      <p className="text-gray-600">Doctor: {appointment.doctor}</p>
                    </div>
                    <div className="mt-4">
                      <button
                        className={`w-full font-bold py-2 px-4 rounded ${bookedAppointments.includes(appointment.id) ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-red-500 text-white hover:bg-red-600'}`}
                        onClick={() => handleBooking(appointment)}
                        disabled={bookedAppointments.includes(appointment.id)}
                      >
                        {bookedAppointments.includes(appointment.id) ? 'Booked' : 'Book Now'}
                      </button>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
        <div className="bg-white bg-opacity-80 shadow-md rounded p-4 flex justify-center items-center mt-8">
          <div className="w-1/4 text-center p-4">
            <img src="https://via.placeholder.com/50" alt="Support Icon" className="rounded-full mx-auto mb-2" style={{ maxWidth: '100%' }} />
            <span className="text-gray-600 text-xs block">Support Us</span>
          </div>
          <div className="w-1/4 text-center p-4">
            <img src="https://via.placeholder.com/50" alt="Donate Icon" className="rounded-full mx-auto mb-2" style={{ maxWidth: '100%' }} />
            <span className="text-gray-600 text-xs block">Donate</span>
          </div>
          <div className="w-1/4 text-center p-4">
            <img src="https://via.placeholder.com/50" alt="Volunteer Icon" className="rounded-full mx-auto mb-2" style={{ maxWidth: '100%' }} />
            <span className="text-gray-600 text-xs block">Volunteer</span>
          </div>
          <div className="w-1/4 text-center p-4">
            <img src="https://via.placeholder.com/50" alt="Contact Icon" className="rounded-full mx-auto mb-2" style={{ maxWidth: '100%' }} />
            <span className="text-gray-600 text-xs block">Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointment;
