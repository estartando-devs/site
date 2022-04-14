export type SubscriptionData = {
  id: string;
  data: {
    createdAt?: string;
    number?: string;
    testimony?: string;
    city?: string;
    phone?: string;
    course: 'Desenvolvimento Web' | 'Desenvolvimento Backend' | 'Design UI/UX';
    approved: boolean;
    availableTime?: boolean;
    acceptTerms?: boolean;
    updatedby?: string;
    fullName: string;
    address?: string;
    zipcode?: string;
    email?: string;
    isStudent?: boolean;
    dateBirth?: string;
    lastupdate?: Lastupdate;
    neighborhood?: string;
  };
};

export type Lastupdate = {
  _seconds?: number;
  _nanoseconds?: number;
};
