export const Analytics = () => (
  <>
    <script
      async
      type="text/partytown"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING}`}
    />
    <script
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
    {/* GTM CONTA DO DEVS */}
    <script
      async
      type="text/partytown"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_DEVS}`}
    />
    <script
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID_DEVS}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
    {/* SCRIPT OPTIMIZE */}
    <script
      async
      type="text/partytown"
      src={`https://www.googleoptimize.com/optimize.js?id=${process.env.NEXT_PUBLIC_OPT_ID_DEVS}`}
    />
  </>
);
