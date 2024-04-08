'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function CoinApi() {
    const CoinApiKey = process.env.NEXT_PUBLIC_COINAPI_KEY
    const baseAsset = "BTC";
    const quoteAsset = "USD"
    const url = `https://rest.coinapi.io/v1/exchangerate/${baseAsset}/${quoteAsset}?apiKey=${CoinApiKey}`;

    const [portfolio, setPortfolio] = useState<{ rate: string | null; error: string | null }>({ rate: null, error: null });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('failed to fetch');
                const data = await response.json();
                const formattedRate = Number(data.rate).toFixed(2);
                setPortfolio({ rate: formattedRate, error: null });
            } catch (error) {
                const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
                console.log("there was an error fetching the data", message);
                setPortfolio({ rate: null, error: message })
            }
        };
        fetchData();
    }, [url]);
    
  
    return (
      <div>
        <div>CoinApi</div>
        <div>
            {portfolio.error && <p>Error: {portfolio.error}</p>}
                {portfolio.rate && <p>Exchange Rate (BTC to USD): ${portfolio.rate}</p>}
                {!portfolio.rate && !portfolio.error && <p>Loading...</p>}
        </div>
        </div>
  )
}
