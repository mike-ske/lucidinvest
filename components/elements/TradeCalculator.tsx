'use client';
import { useState } from 'react';
import Image from 'next/image';
import Marquee from "./Marquee";
import CustomSelect from './CustomSelect';

export default function TradingCalculator() {
  const [category, setCategory] = useState('');
  const [instrument, setInstrument] = useState('');
  const [tradeSize, setTradeSize] = useState(10000);
  const [leverage, setLeverage] = useState(10);
  const [result, setResult] = useState<number | null>(null);

  const categoryOptions = [
    { value: 'forex', label: 'Forex' },
    { value: 'stocks', label: 'Stocks' },
    { value: 'crypto', label: 'Crypto' },
  ];

  const instrumentOptions = [
    { value: 'eurusd', label: 'EUR/USD' },
    { value: 'gbpusd', label: 'GBP/USD' },
    { value: 'usdjpy', label: 'USD/JPY' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calculated = (tradeSize * leverage * 0.001).toFixed(2);
    setResult(Number(calculated));
  };

  return (
    <div className="trade-calculator-box">
      <form className="default-form2" onSubmit={handleSubmit}>
        {/* Category and Instrument */}
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="form-group">
              <div className="inner-title"><h4>Category</h4></div>
              <div className="input-box">
                <div className="select-box clearfix">
                  <CustomSelect
                    options={categoryOptions}
                    placeholder="Select Category"
                    onChange={setCategory}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="form-group">
              <div className="inner-title"><h4>Instrument</h4></div>
              <div className="input-box">
                <div className="select-box clearfix">
                  <CustomSelect
                    options={instrumentOptions}
                    placeholder="Select Instrument"
                    onChange={setInstrument}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trade Size */}
        <div className="row">
          <div className="col-xl-12">
            <div className="form-group">
              <div className="inner-title">
                <h4>Trade Size</h4>
                <h4>${tradeSize.toLocaleString()}</h4>
              </div>
              <div className='input-box'>
                <div className='trade-size-box'>
                  <input
                    type="range"
                    min={100}
                    max={100000}
                    step={100}
                    value={tradeSize}
                    onChange={(e) => setTradeSize(Number(e.target.value))}
                    className="range-input"
                  />
                  <div className="trade-size-box__outer">
                    <p>$100</p>
                    <p>$50,000</p>
                    <p>$100,000</p>
                  </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>

        {/* Leverage */}
        <div className="row">
          <div className="col-xl-12">
            <div className="form-group">
              <div className="inner-title">
                <h4>Leverage</h4>
                <h4>1:{leverage}</h4>
              </div>
              <div className='input-box'>
                <div className='trade-size-box'>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    step={10}
                    value={leverage}
                    onChange={(e) => setLeverage(Number(e.target.value))}
                    className="range-input"
                  />

                  <div className="trade-size-box__outer">
                    <p>1:10</p>
                    <p>1:100</p>
                    <p>1:500</p>
                  </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>

        {/* Result Box */}
        <div className="results-box text-center">
          <div className="results-box__shape1">
            <Image
              src="/assets/images/shapes/calculator-v1-shape2.png"
              alt="Shape"
              width={490}
              height={199}
              priority
            />
          </div>
          <div className="text">
            <p>See Your Trading Results Here</p>
            <h2>{result !== null ? `$${result}` : '--'}</h2>
          </div>
          <div className="btn-box">
            <button className="btn-one" type="submit">
              <span className="txt">Start Trading</span>
              <i className="icon-right-arrow"></i>
            </button>
          </div>
        </div>
      </form>

      {/* Marquee */}
      <div className="trade-calculator-style1__big-title">
        <Marquee speed={25} direction="up" className="trade-calculator-style1__big-title__inner">
          <ul>
            <li>calculator</li>
            <li>calculator</li>
            <li>calculator</li>
          </ul>
        </Marquee>
      </div>
    </div>
  );
}
