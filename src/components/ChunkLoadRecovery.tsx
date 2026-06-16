'use client';

import { useEffect } from 'react';

const RELOAD_KEY = 'chunk-load-recovery';

function isChunkLoadFailure(reason: unknown) {
  if (!reason) {
    return false;
  }

  const message =
    typeof reason === 'string'
      ? reason
      : reason instanceof Error
        ? reason.message
        : typeof reason === 'object' && reason !== null && 'message' in reason
          ? String(reason.message)
          : '';

  return /ChunkLoadError|Loading chunk [\d]+ failed|Failed to fetch dynamically imported module|Failed to load chunk/i.test(message);
}

function reloadOnce() {
  if (typeof window === 'undefined') {
    return;
  }

  const alreadyReloaded = window.sessionStorage.getItem(RELOAD_KEY);
  if (alreadyReloaded) {
    window.sessionStorage.removeItem(RELOAD_KEY);
    return;
  }

  window.sessionStorage.setItem(RELOAD_KEY, '1');
  window.location.reload();
}

export default function ChunkLoadRecovery() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (isChunkLoadFailure(event.error ?? event.message)) {
        reloadOnce();
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (isChunkLoadFailure(event.reason)) {
        reloadOnce();
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null;
}