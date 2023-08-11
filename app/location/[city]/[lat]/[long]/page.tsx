import React from 'react';
import { getClient } from '@/apollo-clients';
import { fetchWeatherQueries } from '@/graphql/queries/fetchWeatherQueries';
import CalloutCard from '@/components/CalloutCard';
import StatCard from '@/components/StatCard';
import InformationPanel from '@/components/InformationPanel';
import TempChart from '@/components/TempChart';

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQueries,
    variables: {
      current_weather: 'true',
      longitude: long,
      latitude: lat,
      timezone: 'GMT',
    },
  });
  console.log(data);
  const results: Root = data.myQuery;

  console.log(results.hourly.time);
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel city={city} results={results} lat={lat} long={long} />
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold ">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at: {''}
              {new Date(results.current_weather.time).toLocaleTimeString()} ({results.timezone})
            </p>
          </div>
          <div className="m-2 mb-10">
            <CalloutCard message="This is for gpt 3" />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Température maximum"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="yellow"
            />
            <StatCard
              title="Température minimum"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
              color="green"
            />
            <div>
              <StatCard title="Index UV" metric={`${results.daily.uv_index_max[0].toFixed(1)}`} color="rose" />
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message={`Attention, l'index UV est de ${results.daily.uv_index_max[0].toFixed(1)} aujourd'hui`}
                  waring
                />
              )}
            </div>
            <div className="flex space-x-3">
              <StatCard
                title="Vitesse du vent"
                metric={`${results.current_weather.windspeed.toFixed(1)} m/s`}
                color="cyan"
              />
              <StatCard
                title="Direction du vent"
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color="violet"
              />
            </div>
          </div>
        </div>
        <hr className="mb-5" />
        <div className="space-y-3">
          <TempChart results={results} />
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
