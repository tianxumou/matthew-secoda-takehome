import { NextResponse } from 'next/server';

// api/cryptoCurrencies
export async function GET() {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('CMC_PRO_API_KEY', process.env.CMC_PRO_API_KEY ?? '');
  try {
    const response = await fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10',
      {
        headers: requestHeaders,
      }
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
