export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

type Config = {
  page_path?: string;
  event_category?: string;
  event_label?: string;
  value?: string | number;
};

type GtagEvent = {
  action?: any;
  category?: string;
  label?: string;
  value?: string;
};

declare global {
  interface Window {
    gtag: (type: string, id: string | undefined, config: Config) => void;
  }
}

export const pageview = (url: string) => {
  window.gtag &&
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
};

export const event = ({ action, category, label, value }: GtagEvent) => {
  window.gtag &&
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
};
