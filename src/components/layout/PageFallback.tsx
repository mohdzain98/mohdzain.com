import { Skeleton } from "@/components/ui/skeleton";

/** Suspense fallback shown while a lazy route chunk loads. */
export default function PageFallback() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-4 px-4 py-12" aria-busy>
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}
