'use client';

import { AreaChart, Card, Title } from '@tremor/react';

type Props = {
  results: Root;
};

function TempChart({ results }: Props) {
  const hourly = results?.hourly.time
    .map((time) => new Date(time).toLocaleString('fr-FR', { hour: 'numeric', hour12: false }))
    .slice(0, 24);
  const data = hourly.map((hour, index) => ({
    time: Number(hour),
    'Température (C°)': results.hourly.temperature_2m[index],
  }));
  const dataFormatter = (value: number) => `${value}°C`;
  return (
    <Card>
      <Title>Température</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend={true}
        index="time"
        categories={['Température (C°)']}
        colors={['rose']}
        minValue={0}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default TempChart;
