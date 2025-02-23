import { ObjectSchema, boolean, object, string } from "yup";
import { FormValues as FV } from "./types";
import { SchemaShape } from "schemas/types";
import { requiredString } from "schemas/string";

export const schema = object<any, SchemaShape<FV>>({
  name: object<any, SchemaShape<FV["name"]>>({
    first: requiredString,
    last: requiredString,
  }),
  address: object<any, SchemaShape<FV["address"]>>({
    street: requiredString,
    //complement: optional
  }),
  city: requiredString,
  postalCode: requiredString,
  country: object<any, SchemaShape<FV["country"]>>({
    name: requiredString,
  }),
  //  usState: no need to validate, optional and preselected
  email: string().email("invalid").required("required"),
  hasAgreedToTerms: boolean().oneOf(
    [true],
    "donors must agree to donation terms"
  ),
}) as ObjectSchema<FV>;
