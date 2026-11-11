import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** False during SSR/first server render, true once mounted on the client. */
export function useMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
