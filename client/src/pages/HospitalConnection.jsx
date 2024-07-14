import React, { useState } from 'react';
import axios from 'axios';

const HospitalConnection = () => {
  const [hospitalId, setHospitalId] = useState('');
  const [guardianId, setGuardianId] = useState('');

  const sendRequest = async () => {
    try {
      const response = await axios.post('/api/connections/request', { hospitalId, guardianId });
      console.log('Connection request sent:', response.data);
    } catch (error) {
      console.error('Error sending connection request:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Connect Hospitals and Guardians</h2>
      <input
        type="text"
        placeholder="Hospital ID"
        value={hospitalId}
        onChange={(e) => setHospitalId(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Guardian ID"
        value={guardianId}
        onChange={(e) => setGuardianId(e.target.value)}
        className="border p-2 w-full"
      />
      <button onClick={sendRequest} className="bg-blue-600 text-white p-2 rounded">
        Send Request
      </button>
    </div>
  );
};

export default HospitalConnection;