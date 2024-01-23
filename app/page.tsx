'use client'

import { useState } from 'react';
import Html5QrcodePlugin from './components/Html5QrCodePlugin';
export default function Home() {
  const [decodedText, setDecodedText] = useState<any>('');

  const onNewScanResult = (decodedText: any, decodedResult: any) => {
    // handle decoded results here
    setDecodedText(decodedText);
  };

  return (
    <main>
      <div className="App">
        <section className="App-section">
          <div className="App-section-title"> Paydia Scanner</div>
          <br />
          <br />
          <br />
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />

          {/* <ResultContainerPlugin results={decodedText} /> */}
          <p>{decodedText}</p>
        </section>
      </div>
    </main>
  );
}
