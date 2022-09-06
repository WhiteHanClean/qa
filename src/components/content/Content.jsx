import React from "react";
import Cards from "../../pages/Cards";
import Record from "../../pages/Record";
import { Routes, Route } from 'react-router-dom'

const Content = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="record" element={<Record/>} />
      </Routes>

      
    </>
  );
};

export default Content;
