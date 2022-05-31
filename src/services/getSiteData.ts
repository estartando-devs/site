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
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/siteData`,
  ).then((data) => data.json());

  const data = siteData.find(
    (_siteData: SiteData<T>) => _siteData?.path === path,
  );

  return data;
};

export const getApprovedList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/platform/approved`,
  ).then((data) => data.json());

  return response;
};
