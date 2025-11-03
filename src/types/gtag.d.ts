// Google Analytics Global Site Tag (gtag) type declarations

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'get',
      targetId: string,
      config?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        reference_id?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export {};