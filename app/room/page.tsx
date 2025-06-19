'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { LiveKitRoom, VideoConference } from '@livekit/components-react';

const RoomContent = () => {
  const searchParams = useSearchParams();
  const [token, setToken] = useState<string | null>(null);
  const room = searchParams.get('room') || 'default-room';

  useEffect(() => {
    const t = searchParams.get('token');
    if (t) {
      setToken(t);
    }
  }, [searchParams]);

  if (!token) {
    return (
      <div style={{ textAlign: 'center', padding: 20 }}>
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          ❌ No token provided in URL
        </p>
      </div>
    );
  }

  const serverUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;
  if (!serverUrl) {
    return (
      <div style={{ textAlign: 'center', padding: 20 }}>
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          ❌ NEXT_PUBLIC_LIVEKIT_URL not set
        </p>
      </div>
    );
  }

  return (
    <LiveKitRoom token={token} serverUrl={serverUrl} connect={true}>
      <div style={{ padding: 10, textAlign: 'center', fontSize: 16 }}>
        ✅ Connected to room: <strong>{room}</strong>
      </div>
      <VideoConference />
    </LiveKitRoom>
  );
};

export default function RoomPage() {
  return (
    <Suspense fallback={<div style={{ padding: 20, textAlign: 'center' }}>Loading session…</div>}>
      <RoomContent />
    </Suspense>
  );
}
