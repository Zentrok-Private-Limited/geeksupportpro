declare global {
  interface Window {
    jivo_api?: {
      open: () => void;
    };
  }
}

export {};