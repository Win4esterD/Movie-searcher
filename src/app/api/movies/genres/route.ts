import { serveMovies } from "@/services";
import { authKey } from "../../apiKey";
import { genresLink } from "@/services/urls";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await serveMovies(genresLink, authKey);
  return NextResponse.json(response.genres);
}