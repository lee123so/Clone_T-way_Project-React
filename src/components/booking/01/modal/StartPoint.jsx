import React from "react";
import { useState } from "react";
import styled from "styled-components";

const StartPoint = ({ setStartNumber, setStartModal }) => {
  
  return (
    <StStartPoint>
      <div onClick={() => {setStartNumber(1); setStartModal();}}>
        <h3 value="1">여수</h3>
        <h3>PSU</h3>
      </div>

      <div onClick={() => {setStartNumber(2); setStartModal();}}>
        <h3 value="2">김포</h3>
        <h3>GMP</h3>
      </div>
      <div onClick={() => {setStartNumber(3); setStartModal();}}>
        <h3 value="3">대구</h3>
        <h3>TAE</h3>
      </div>
      <div onClick={() => {setStartNumber(4); setStartModal();}}>
        <h3 value="4">청주</h3>
        <h3>CJJ</h3>
      </div>
    </StStartPoint>
  );
};

export default StartPoint;

const StStartPoint = styled.div`
  width: 350px;
  padding: 30px 40px 35px 5px;
  height: 450px;
  position: absolute;
  box-shadow: rgb(255 255 255) 1px 1px 15px;
  border: 1px solid #4d4d4d;
  border-radius: 5px;
  background-color: white;
  margin-top: 20px;

  & div {
    margin: 15px;
    padding: 0 20px;
    background-color: rgb(242, 246, 249);
    width: 100%;
    height: 60px;
    border-radius: 5px;
    box-sizing: border-box;
    color: #313131;
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    & h3 {
      padding: 0 30px;
    }
  }
`;
