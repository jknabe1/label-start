import { ImageResponse } from 'next/og';
import '../globals.css'

 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 140,
          fontFamily: 'eurostile',
          color: 'black',
          background: '#FC4337',
          width: '100%',
          height: '100%',
          padding: '',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
         K&K RECORDS 
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}