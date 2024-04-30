import {NextResponse} from 'next/server';
import {authKey} from '../apiKey';
import { serveMovies } from '@/services';
import { baseUrl } from '@/services';

export async function GET() {
  const response = await serveMovies(baseUrl, authKey);
  return NextResponse.json(response);
}
