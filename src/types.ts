export interface User {
  id: number;
  name: string;
  email: string;
  provider: string;
  status: string;
  socialId: string | null;
  createdAt: string;
  updatedAt: string;
  picture: string;
  subscriptionState: string;
  subscriptionType: string;
  subscriptionDuration: string;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  stripePaymentId: string | null;
  isSubscribed: boolean;
  subscriptionExpiry: string | null;
  activationExpiry: string;
  coin: number;
  deletedAt: string | null;
  bookmarks: Bookmark[];
  folders: Folder[];
  articles: Article[];
  favorite: Favorite[];
  storedGpt: StoredGpt[];
  coupon: Coupon[];
  tracking: Tracking;
}

export interface Bookmark {
  id: number;
  date: string;
  imgUrl: string;
  snippet: string;
  title: string;
  url: string;
  source: string;
  folderName: string;
  description: string | null;
  from: unknown | null;
  deleteDate: string | null;
}

export interface Folder {
  id: number;
  parentFolder: string;
  name: string;
  deletedAt: string | null;
}

export interface Article {
  id: number;
  articleUrl: string;
  parentFolderName: string;
  articleFolderName: string;
  source: string;
  deletedAt: string | null;
}
export interface Favorite {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  url: string;
  authors: string | null;
  citations: string | null;
  cite_link: string | null;
  resource_link: string | null;
  resource_title: string | null;
  engine: string;
  deleteDate: string | null;
  updateDate: string;
}
export interface StoredGpt {
  id: number;
  result: [
    {
      gpt: string;
      date: string;
      page: number;
      query: string;
    },
  ];
  updatedAt: string;
}
export interface Coupon {
  id: number;
  date: string;
  code: string;
  used: boolean;
  category: CouponCategory;
  user: User;
  deleteDate: string;
}
export interface Tracking {
  id: number;
  numberOfSearches: number;
  numberOfBookmarks: number;
  numberOfFolders: number;
  numberOfUploads: number;
  numberOfLinks: number;
  noOfTimesIncognitoIsUsed: number;
  noOfTimesChatGptIsUsed: number;
  noOfTimesTranslatorIsUsed: number;
  noOfTimesOCRIsUsed: number;
  createdAt: string;
  updatedAt: string;
}
export enum CouponCategory {
  Premium = 'premium',
  Standard = 'standard',
}
