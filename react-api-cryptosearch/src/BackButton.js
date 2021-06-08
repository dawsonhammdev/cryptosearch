import React from 'react';
import { useHistory } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const Item = () => {
    let history = useHistory();
    return (
        <>
        <div className="back-btn-container">
          <button onClick={() => history.goBack()}><BiArrowBack /></button>
        </div>
        </>
    );
};