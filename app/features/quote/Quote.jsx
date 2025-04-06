"use client";

import React, { useState, useEffect } from "react";
import { getQuote } from "@api/QuotesAPI";

function Quote() {
  let delay = 60;

  const [quote, setQuote] = useState();
  const [count, setCount] = useState(delay);

  const fetchQuote = async () => {
    const response = await getQuote();
    setQuote(response);
    console.log(response);
  };

  useEffect(() => {
    // setTimeout(() => fetchQuote(), delay * 1000);
    const interval = setInterval(() => {
      fetchQuote();
    }, delay * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((delay) => delay - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (count === 0) {
    setCount(delay);
  }

  // if (!quote) {
  //   return;
  // }

  return (
    <>
      <p className="md:text-lg text-xs w-full text-center bg-[rgba(255,255,255,0.4)] p-2">
        -- New quote in&nbsp;
        <span className="font-bold">{count}s</span> --
      </p>
      <div className="bg-[rgba(0,0,0,0.4)] px-10 md:px-5 py-4 w-full flex justify-center items-center">
        <br />
        {quote ? (
          <p className="md:text-2xl text-md text-white">
            <em>"{quote[0].q}"</em>
            <br /> - <span className="text-center">{quote[0].a}</span>
          </p>
        ) : null}
      </div>
    </>
  );
}

export default Quote;
