import React from 'react'
import './Coin.css';
import history from "./history"

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap}) => {
    // hello

    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className="back">
                    <div className='coin'>
                        <img src={image} alt="crypto"/>
                        <h1>{name}</h1>
                        <p className='coin-symbol'>{symbol}</p>
                    </div>
                    <div className='coin-data'>
                        <p className='coin-price'>${price}</p>
                        <p classNAme='coin-volume'>${volume.toLocaleString()}</p>
                        {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                        ) : (
                        <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                        )}
                        <p className='coin-marketcap'>
                            Market Cap: ${marketcap.toLocaleString()}
                        </p>
                    </div>
                </div>
                <dic className="front">
                    <div className="middle">
                        <button className="btngraph" onClick={() => history.push('/graph')}>See Graph</button>
                    </div>
                </dic>
            </div>
                
            
        </div>
    )
}

export default Coin
