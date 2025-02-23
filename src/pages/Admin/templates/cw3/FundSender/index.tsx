import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { FormValues } from "./types";
import { Chain } from "types/tx";
import { useChainQuery } from "services/apes";
import QueryLoader from "components/QueryLoader";
import { FormError, FormSkeleton } from "components/admin";
import { chainIds } from "constants/chainIds";
import { useAdminContext } from "../../../Context";
import Form from "./Form";
import { schema } from "./schema";

export default function FundSender() {
  const { multisig } = useAdminContext();
  const query = useChainQuery({
    address: multisig,
    chainId: chainIds.polygon,
  });

  return (
    <QueryLoader
      queryState={query}
      messages={{
        loading: <FormSkeleton />,
        error: <FormError errorMessage="Failed to get token list" />,
      }}
    >
      {(chain) => (
        <Context
          {...chain}
          key={
            query.requestId /** re-render context on new request (invalidated) */
          }
        />
      )}
    </QueryLoader>
  );
}

function Context(props: Chain) {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      token: { ...props.native_currency, amount: "0" },
    },
  });

  return (
    <FormProvider {...methods}>
      <Form {...props} />
    </FormProvider>
  );
}
