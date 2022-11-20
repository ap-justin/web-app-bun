import { Documentation } from "../../types";
import { Asset } from "components/FileDropzone";

export type FormValues = Pick<
  Documentation,
  "website" | "sdg" | "hasAuthority" | "hasAgreedToTerms"
> & {
  proofOfIdentity: Asset;
  proofOfRegistration: Asset;
  financialStatements: Asset;
  auditedFinancialReports: Asset;
};
