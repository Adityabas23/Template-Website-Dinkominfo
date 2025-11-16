// app/api/cuaca/route.ts
import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

export const runtime = 'nodejs';

// Digital Forecast Jawa Tengah (BMKG)
const BMKG_URL =
  'https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-Jawa_Tengah.xml';

// Mapping kode cuaca BMKG ke teks Indonesia
const WEATHER_CODE_MAP: Record<string, string> = {
  '0': 'Cerah',
  '1': 'Cerah Berawan',
  '2': 'Cerah Berawan',
  '3': 'Berawan',
  '4': 'Berawan Tebal',
  '5': 'Udara Kabur',
  '10': 'Asap',
  '45': 'Kabut',
  '60': 'Hujan Ringan',
  '61': 'Hujan Sedang',
  '63': 'Hujan Lebat',
  '80': 'Hujan Lokal',
  '95': 'Hujan Petir',
  '97': 'Hujan Petir Lebat',
};

export async function GET() {
  try {
    const res = await fetch(BMKG_URL, {
      cache: 'no-store',
    });

    const xmlText = await res.text();

    // Parser XML aman + simple
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '',
    });

    const json = parser.parse(xmlText);

    // Struktur standar BMKG:
    // data.forecast.area -> array lokasi
    const areas = json?.data?.forecast?.area;
    if (!areas || !Array.isArray(areas)) {
      // kalau gagal, fallback dummy
      return NextResponse.json(
        {
          location: 'Purwokerto',
          temperature: 25,
          description: 'Cerah Berawan',
          source: 'dummy',
        },
        { status: 200 }
      );
    }

    // Cari area yang deskripsi-nya mengandung "Purwokerto"
    let purwokertoArea =
      areas.find((a: any) =>
        String(a.description || '')
          .toLowerCase()
          .includes('purwokerto')
      ) || areas[0];

    const parameters = purwokertoArea?.parameter;
    if (!parameters) {
      return NextResponse.json(
        {
          location: 'Purwokerto',
          temperature: 25,
          description: 'Cerah Berawan',
          source: 'dummy',
        },
        { status: 200 }
      );
    }

    // helper: pastikan parameter selalu array
    const ensureArray = (value: any) =>
      Array.isArray(value) ? value : value ? [value] : [];

    const paramsArr = ensureArray(parameters);

    const tempParam = paramsArr.find((p: any) => p.id === 't');
    const weatherParam =
      paramsArr.find((p: any) => p.id === 'weather') ||
      paramsArr.find((p: any) => p.id === 'w');

    let temperature: number | null = null;
    let weatherCode: string | null = null;

    if (tempParam?.timerange) {
      const trs = ensureArray(tempParam.timerange);
      const first = trs[0];
      // value bisa array / single object
      const v = ensureArray(first?.value)[0];
      if (v !== undefined && v !== null) {
        temperature = Number(v);
      }
    }

    if (weatherParam?.timerange) {
      const trs = ensureArray(weatherParam.timerange);
      const first = trs[0];
      const v = ensureArray(first?.value)[0];
      if (v !== undefined && v !== null) {
        weatherCode = String(v);
      }
    }

    const description =
      (weatherCode && WEATHER_CODE_MAP[weatherCode]) || 'Cerah Berawan';

    const data = {
      location: 'Purwokerto',
      temperature: temperature ?? 25,
      description,
      source: 'bmkg',
      rawCode: weatherCode ?? null,
    };

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error('Error ambil cuaca BMKG:', err);
    return NextResponse.json(
      {
        location: 'Purwokerto',
        temperature: 25,
        description: 'Cerah Berawan',
        source: 'dummy',
      },
      { status: 200 }
    );
  }
}
