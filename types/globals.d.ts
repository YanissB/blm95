interface Window {
  gtag: (
    command: string,
    action: string,
    params: {
      analytics_storage: "granted" | "denied";
    }
  ) => void;
}
