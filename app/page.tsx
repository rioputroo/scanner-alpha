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
    <main className='h-full'>
      <div className="h-screen p-2">
        <section>
          <h1 className='flex justify-center font-bold antialiased'>Paydia Scanner</h1>
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
          <p className='antialiased text-xs my-6 text-wrap break-words'>{decodedText}</p>
        </section>
      </div>
    </main>
  );
}
