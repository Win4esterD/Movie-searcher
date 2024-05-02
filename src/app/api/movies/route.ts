import {NextRequest, NextResponse} from 'next/server';
import {authKey} from '../apiKey';
import {serveMovies} from '@/services';
import {baseUrl} from '@/services';

export async function GET(req: NextRequest) {
  let link = baseUrl + req.nextUrl.search.replace('?', '&');
  try {
    const response = await serveMovies(link, authKey);
    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
  }
}
