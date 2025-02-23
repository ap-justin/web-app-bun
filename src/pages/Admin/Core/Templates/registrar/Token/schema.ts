import { ObjectSchema, object } from "yup";
import { FormValues } from "./types";
import { SchemaShape } from "schemas/types";
import { requiredWalletAddr } from "schemas/string";
import { chainIds } from "constants/chainIds";
import { proposalShape } from "../../../../constants";

export const schema = object<any, SchemaShape<FormValues>>({
  ...proposalShape,
  token: requiredWalletAddr(chainIds.polygon),
}) as ObjectSchema<FormValues>;
