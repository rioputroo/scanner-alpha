'use client'

import { useState } from 'react';
import Html5QrcodePlugin from './components/Html5QrCodePlugin'
import ResultContainerPlugin from './components/ResultContainerPlugin'
export default function Home() {
  const [decodedResults, setDecodedResults] = useState<any>([]);

  const onNewScanResult = (decodedText: any, decodedResult: any) => {
    // handle decoded results here
    console.log("App [result]", decodedResult);
    setDecodedResults((prev: any) => [...prev, decodedResult]);
  };

  return (
    <main>
      <h1>Paydia Scanner</h1>

      {/* <div className='w-2/4'>
        <Html5QrcodePlugin
          fps={10}
          qrbox={400}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      </div> */}

      <div className="App">
        <section className="App-section">
          <div className="App-section-title"> Html5-qrcode React demo</div>
          <br />
          <br />
          <br />
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />

          <ResultContainerPlugin results={decodedResults} />
        </section>
      </div>
    </main>
  );
}
