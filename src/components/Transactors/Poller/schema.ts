import * as Yup from "yup";
import { CreatePollValues } from "./types";
import { SchemaShape } from "schemas/types";
import { stringByteSchema } from "schemas/string";

const shape: SchemaShape<CreatePollValues> = {
  title: stringByteSchema("title", 4, 64),
  description: stringByteSchema("description", 4, 1024),
  link: stringByteSchema("link", 4, 128),
};

export const schema = Yup.object().shape(shape);
