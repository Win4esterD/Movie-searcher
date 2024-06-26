import {NextRequest, NextResponse} from 'next/server';
import {serveMovies} from '@/services';
import {oneMovie} from '@/services/urls';
import {authKey} from '../apiKey';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.search.slice(4);
  const requestURL = oneMovie + id + '?append_to_response=videos';

  try {
    const response = await serveMovies(requestURL, authKey);
    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
  }
}
