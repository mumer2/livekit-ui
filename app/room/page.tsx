'use client';
import { LiveKitRoom } from '@livekit/components-react';
import '@livekit/components-styles';

export default function RoomPage({ searchParams }: { searchParams: { token?: string } }) {
  const token = searchParams?.token;

  if (!token) return <div>❌ No token provided in URL</div>;

  return (
    <LiveKitRoom
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      connect
      style={{ height: '100vh' }}
    />
  );
}
