import {NextRequest, NextResponse} from 'next/server';
import {authKey} from '../apiKey';
import {serveMovies} from '@/services';
import {baseUrl, searchUrl} from '@/services';

export async function GET(req: NextRequest) {
  let link

  const queries = req.nextUrl.search.replace('?', '&');
  if (queries.includes('query')) {
    link = searchUrl + queries;
  } else {
    link = baseUrl + queries;
  }

  try {
    const response = await serveMovies(link, authKey);
    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
  }
}
