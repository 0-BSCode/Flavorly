"use client";
import { useRouter } from "next/navigation";
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow'>
      <h2 className='mb-4 text-2xl font-bold'>Uh oh...</h2>
      <p className='mb-4 text-lg text-neutral-gray-1'>{error.message}</p>
    </div>
  );
}
