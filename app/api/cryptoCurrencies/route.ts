// api/cryptoCurrencies
export const revalidate = 60; // set default revalidation time in seconds

export async function GET() {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('X-CMC_PRO_API_KEY', process.env.CMC_PRO_API_KEY ?? '');
  try {
    const response = await fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10',
      {
        headers: requestHeaders,
      }
    );
    const data = await response.json();
    return Response.json(data);
  } catch (error: any) {
    return Response.json(error.message);
  }
}
