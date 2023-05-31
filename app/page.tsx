import { Card, Divider, Subtitle, Text } from '@tremor/react';
import CityPicker from '@/components/CityPicker';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col items-center justify-center ">
      <Card className="max-w-3xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">By Emilien from Sonny sangha</Subtitle>
        <Divider className="my-10"></Divider>
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
