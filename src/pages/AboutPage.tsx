import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold">About AI Future</h1>
        <p className="mt-4 text-lg">Learn more about our mission to educate and inform about artificial intelligence.</p>
      </div>
    </div>
  );
};

export default AboutPage;
