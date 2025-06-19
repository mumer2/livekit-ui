'use client';

import { LiveKitRoom, VideoConference } from '@livekit/components-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function RoomContent() {
  const searchParams = useSearchParams();
  const [token, setToken] = useState<string | null>(null);
  const room = searchParams.get('room') || 'default-room';

  useEffect(() => {
    const t = searchParams.get('token');
    if (t) setToken(t);
  }, [searchParams]);

  if (!token) {
    return (
      <div style={{ textAlign: 'center', padding: 20 }}>
        <p style={{ color: 'red', fontWeight: 'bold' }}>❌ No token provided in URL</p>
      </div>
    );
  }

  return (
    <LiveKitRoom
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      connect={true}
    >
      <VideoConference />
    </LiveKitRoom>
  );
}

export default function RoomPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: 20 }}>Loading session…</div>}>
      <RoomContent />
    </Suspense>
  );
}
