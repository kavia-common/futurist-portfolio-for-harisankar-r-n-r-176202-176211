const ANALYTICS_ID = process.env.REACT_APP_ANALYTICS_ID;

// PUBLIC_INTERFACE
export function track(event, payload = {}) {
  /** Basic analytics stub; extend to your provider */
  if (!ANALYTICS_ID) return;
  // Example: push to dataLayer or custom endpoint
  // eslint-disable-next-line no-console
  console.debug("track:", event, payload);
}
