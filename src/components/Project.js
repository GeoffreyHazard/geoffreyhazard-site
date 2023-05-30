import React from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Project Details</h2>
      <p>Project ID: {id}</p>
      {/* Add the specific project content here */ "Project content herrre"}
    </div>
  );
};

export default Project;
