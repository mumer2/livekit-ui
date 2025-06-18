'use client';

import { useSearchParams } from 'next/navigation';
import { LiveKitRoom } from '@livekit/components-react';

export default function RoomPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  if (!token) {
    return <div>❌ No token provided in URL</div>;
  }

  return (
    <LiveKitRoom
      token={token}
      serverUrl="https://your-livekit-server.com" // Replace with your LiveKit server URL
      connect
    >
      {/* Your UI inside the room */}
      <div style={{ padding: 20 }}>✅ Connected to room</div>
    </LiveKitRoom>
  );
}
