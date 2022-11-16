import { yupResolver } from "@hookform/resolvers/yup";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { SchemaShape } from "schemas/types";
import { InitReg } from "services/aws/registration/types";
import { GENERIC_ERROR_MESSAGE } from "pages/Registration/constants";
import { useNewApplicationMutation } from "services/aws/registration";
import { useErrorContext } from "contexts/ErrorContext";
import Checkbox from "components/Checkbox";
import { TextInput } from "components/registration";
import { BtnPrim, BtnSec } from "components/registration";
import { handleMutationResult } from "helpers";
import { PRIVACY_POLICY } from "constants/urls";
import { routes } from "../RegistrationV2/routes";

type FormValues = { email: string; hasAgreedToPrivacyPolicy: boolean };

export default function Signup({ classes = "" }: { classes?: string }) {
  const navigate = useNavigate();
  const [register, { isLoading }] = useNewApplicationMutation();
  const { handleError } = useErrorContext();
  const methods = useForm<FormValues>({
    resolver: yupResolver(
      Yup.object().shape<SchemaShape<FormValues>>({
        email: Yup.string().required("required").email("invalid email"),
        hasAgreedToPrivacyPolicy: Yup.boolean().oneOf(
          [true],
          "must agree to privacy policy"
        ),
      })
    ),
  });

  const { handleSubmit } = methods;

  async function onSubmit({ email }: FormValues) {
    handleMutationResult(
      await register({ email }),
      ({ ContactPerson: c }) => {
        const state: InitReg = {
          reference: c.PK,
          email: c.Email,
          isEmailVerified: c.EmailVerified,
          lastVerified: c.EmailVerificationLastSentDate,
        };
        navigate(`${routes.confirmEmail}`, { state });
      },
      handleError
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${classes} padded-container w-full max-w-[37.5rem] my-20 grid`}
    >
      <h3 className="text-3xl font-bold text-center">
        Register to Angel Protocol
      </h3>
      <FormProvider {...methods}>
        <TextInput<FormValues>
          name="email"
          label="E-mail"
          placeholder="e.g. johndoe@example.com"
          classes={{ container: "mt-8 mx-0 sm:mx-24" }}
        />
        <Checkbox<FormValues>
          required
          name="hasAgreedToPrivacyPolicy"
          classes={{
            container: "justify-self-center gap-3.5 mt-6 mb-8 text-xs",
            checkbox:
              "appearance-none border border-gray-d2 dark:border-white w-4 h-4 rounded checked:bg-blue",
          }}
        >
          I declare that I have read and agreed to{" "}
          <a
            className="underline text-orange"
            target="_blank"
            href={PRIVACY_POLICY}
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </Checkbox>
      </FormProvider>
      <BtnPrim
        type="submit"
        className="mt-8 mx-0 sm:mx-24"
        disabled={isLoading}
      >
        Register
      </BtnPrim>
      <p className="text-sm mx-0 sm:mx-24 relative h-px grid place-items-center bg-gray-d1 dark:bg-gray my-11">
        <span className="bg-gray-l5 dark:bg-blue-d4 p-3 absolute text-gray-d1 dark:text-gray">
          OR
        </span>
      </p>
      <BtnSec as="link" className="mx-0 sm:mx-24" to={routes.resume}>
        Resume your registration
      </BtnSec>
    </form>
  );
}
