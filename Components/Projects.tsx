import React from 'react';
import Card from './Card';
import ProjectsDetails from '../Projects';

const Projects = () => {
  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
      {ProjectsDetails.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
