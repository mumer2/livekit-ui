'use client';

import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token'); // ✅ correct

  if (!token) {
    return <div>❌ Token is missing</div>;
  }

  return (
    <div>
      ✅ Token: {token}
      {/* Your LiveKitRoom UI here */}
    </div>
  );
}
