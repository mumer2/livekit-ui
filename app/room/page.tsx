'use client';

import { LiveKitRoom } from '@livekit/components-react';
import { useSearchParams } from 'next/navigation';

export default function RoomPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const room = searchParams.get('room') || 'default-room';

  if (!token) {
    return <div>❌ Missing token in URL</div>;
  }

  return (
    <LiveKitRoom
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      connect={true}
    >
      <div className="text-center p-4">✅ Connected to {room}</div>
    </LiveKitRoom>
  );
}
