import React from 'react';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold">Welcome to the Future of AI</h1>
        <p className="mt-4 text-lg">Explore the impact of AI on the future of technology, society, and the world.</p>
      </div>
    </div>
  );
};

export default HomePage;
