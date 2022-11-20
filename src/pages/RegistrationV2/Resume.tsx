import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { SchemaShape } from "schemas/types";
import { getRegistrationState } from "pages/Registration/Steps/getRegistrationState";
import routes from "pages/Registration/routes";
import { useLazyRegQuery } from "services/aws/registration";
import { useErrorContext } from "contexts/ErrorContext";
import { TextInput } from "components/registration";
import { BtnPrim, BtnSec, OrSeparator } from "components/registration";
import {
  getSavedRegistrationReference,
  storeRegistrationReference,
} from "helpers";

type FormValues = { reference: string };

export default function Resume({ classes = "" }: { classes?: string }) {
  const methods = useForm<FormValues>({
    defaultValues: {
      reference: getSavedRegistrationReference() || "",
    },
    resolver: yupResolver(
      Yup.object().shape<SchemaShape<FormValues>>({
        reference: Yup.string().required("required"),
      })
    ),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const navigate = useNavigate();
  const { handleError } = useErrorContext();
  const [checkPrevRegistration] = useLazyRegQuery();

  const onSubmit = async ({ reference }: FormValues) => {
    const {
      isError,
      error,
      data: registration,
    } = await checkPrevRegistration(reference);

    if (isError || !registration) {
      handleError(
        error,
        "No active application found with this registration reference"
      );
      return;
    }
    storeRegistrationReference(reference);

    const regState = getRegistrationState(registration);

    if ("data" in regState && !regState.data.init.isEmailVerified) {
      return navigate(`../${routes.confirmEmail}`, {
        state: regState.data.init,
      });
    }

    navigate(`../${routes.steps}/${regState.step}`, {
      state: regState.data.init,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${classes} padded-container w-full max-w-[37.5rem] my-20 grid`}
    >
      <h3 className="text-3xl font-bold text-center">Resume registration</h3>
      <p className="text-center mt-2 text-gray-d1 dark:text-gray-l2 text-lg">
        Enter your registration reference to resume where you left off
      </p>
      <FormProvider {...methods}>
        <TextInput<FormValues>
          name="reference"
          label="Registration reference"
          placeholder="e.g. 00000000-0000-0000-0000-000000000000"
          classes={{ container: "mt-8 mx-0 sm:mx-24" }}
        />
      </FormProvider>
      <BtnPrim
        type="submit"
        className="mt-8 mx-0 sm:mx-24"
        disabled={isSubmitting}
      >
        Resume
      </BtnPrim>
      <OrSeparator classes="my-11" />
      <BtnSec
        as="link"
        className="mx-0 sm:mx-24"
        to=".."
        disabled={isSubmitting}
      >
        Register new account
      </BtnSec>
    </form>
  );
}
