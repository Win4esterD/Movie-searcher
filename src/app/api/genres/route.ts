import {serveGenres} from '@/services';
import {authKey} from '../apiKey';
import {genresLink} from '@/services/urls';
import {NextResponse} from 'next/server';

export async function GET() {
  try {
    const response = await serveGenres(genresLink, authKey);
    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
  }
}
