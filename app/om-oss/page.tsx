import React from 'react';

const employees = [
  { name: 'Employee 1', image: 'image1.jpg' },
  { name: 'Employee 2', image: 'image2.jpg' },
  { name: 'Employee 3', image: 'image3.jpg' },
  { name: 'Employee 4', image: 'image4.jpg' },
  { name: 'Employee 5', image: 'image5.jpg' },
  { name: 'Employee 6', image: 'image6.jpg' },
];

const Page = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {employees.map((employee, index) => (
        <div key={index} style={{ flex: '0 0 50%', padding: '10px' }}>
          <img src={employee.image} alt={employee.name} style={{ width: '100%' }} />
          <p>{employee.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;