import { useRef } from "react";
import { Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExpandableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ExpandableImage(props: ExpandableImageProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        aria-label={props.alt ? "Enlarge image: " + props.alt : "Enlarge image"}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        className="relative block w-full cursor-zoom-in rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <img
          {...props}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-md border"
        />
        <span className="absolute right-2 bottom-2 rounded-md border bg-card p-2 text-card-foreground">
          <Maximize2 aria-hidden="true" className="size-4" />
        </span>
      </button>
      <dialog
        ref={dialog}
        aria-label={props.alt || "Enlarged image"}
        className="m-auto max-h-[95dvh] max-w-[95vw] overflow-auto overscroll-contain rounded-lg border bg-card p-3 text-card-foreground backdrop:overflow-hidden backdrop:overscroll-contain backdrop:bg-black/75"
      >
        <form method="dialog" className="mb-2 flex justify-end">
          <Button variant="ghost" size="icon-sm" aria-label="Close image">
            <X aria-hidden="true" />
          </Button>
        </form>
        <img
          {...props}
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto max-h-[78dvh] w-auto max-w-full object-contain"
        />
      </dialog>
    </>
  );
}
