'use client';

import { LiveKitRoom } from '@livekit/components-react';
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
      <div className="text-center p-10">
        <p className="text-red-600 font-semibold">❌ No token provided in URL</p>
      </div>
    );
  }

  return (
    <LiveKitRoom
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      connect={true}
    >
      <div className="text-center p-4">✅ Connected to room: {room}</div>
    </LiveKitRoom>
  );
}

export default function RoomPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading session…</div>}>
      <RoomContent />
    </Suspense>
  );
}
