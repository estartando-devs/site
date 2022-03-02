export type SiteData<T> = {
  id: string;
  path: string;
  title: string;
  data: T;
};

type SiteDataQueryParams = {
  path: string;
};

export const getSiteData = async <T>({
  path,
}: SiteDataQueryParams): Promise<SiteData<T> | undefined> => {
  const siteData = await fetch(
    'https://us-central1-estartando-devs-platform.cloudfunctions.net/platform/siteData'
  ).then((data) => data.json());

  const data = siteData.find(
    (_siteData: SiteData<T>) => _siteData?.path === path
  );

  return data;
};
