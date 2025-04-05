"use client";

import React, { useState, useEffect } from "react";
import { getQuote } from "@api/QuotesAPI";

function Quote() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await getQuote();
      setQuote(response);
      console.log(response);
    };
    let delay = 60
    if(!quote) {
      fetchQuote();
    }
    setTimeout(() => fetchQuote(), delay * 1000);
  }, [quote]);

  if (!quote) {
    return;
  }

  return (
    <div className="bg-[rgba(0,0,0,0.4)] py-4 w-screen flex justify-center">
      <p className="md:text-2xl text-md text-white md:px-20 px-10">
        <em>"{quote[0].q}"</em>
        <br /> - <span className="text-center">{quote[0].a}</span>
      </p>
    </div>
  );
}

export default Quote;
