import React from 'react';
import { useHistory } from "react-router-dom";

export const Item = () => {
    let history = useHistory();
    return (
        <>
        <div className="back-btn-container">
          <button onClick={() => history.goBack()}> Back </button>
        </div>
        </>
    );
};