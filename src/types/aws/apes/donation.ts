export type KYCData = {
  fullName: string; // "John Doe"
  email: string; // "john@doe.email.com"
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string; //2000
  country: string;
  consent_tax: boolean;
  consent_marketing: boolean;
};

type DonationRecordBase = {
  amount: number;
  chainId: string;
  date: string;
  hash: string;
  symbol: string;
  kycData?: KYCData;
};

type DonorAddress = string;
type RecipientEndowId = string;

export type DonationReceivedByEndow = DonationRecordBase & {
  id: DonorAddress;
};

export type DonationMadeByDonor = DonationRecordBase & {
  id: RecipientEndowId;
  chainName: string;
  charityName: string;
  donationFinalized: boolean;
  usdValue: number;
};

export type DonationRecord = DonationReceivedByEndow | DonationMadeByDonor;

export type ReceiptPayload = KYCData & {
  transactionId: string; // tx hash
};
export type DonationsQueryParams = {
  id: string;
  chain_id: string;
  afterDate?: string;
  beforeDate?: string;
  chainName?: string;
  denomination?: string;
  status?: string;
  start?: number; //to load next page, set start to ItemCutOff + 1
  limit?: number; // Number of items to be returned per request
};

export type TxLogPayload = {
  amount: number;
  chainId: string;
  destinationChainId: string;
  chainName: string;
  charityName: string;
  denomination: string;
  splitLiq: string; //"50"
  transactionId: string;
  transactionDate: string;
  endowmentId: number;
  walletAddress: string;
  kycData?: KYCData;
};
