import { memo, useEffect, useRef } from "react";
import Breadcrumbs from "components/Breadcrumbs";
import { Steps } from "components/donation";
import { useGetter, useSetter } from "store/accessors";
import {
  DonationRecipient,
  DonationState,
  setRecipient,
} from "slices/donation";
import { PAYMENT_WORDS } from "constants/common";
import { appRoutes } from "constants/routes";

function Content(props: DonationRecipient) {
  const dispatch = useSetter();
  const state = useGetter((state) => state.donation);
  useEffect(() => {
    dispatch(setRecipient(props));
  }, [dispatch, props]);

  const CONTAINER_ID = "__container_id";
  const prevStep = useRef(state.step);
  useEffect(() => {
    /** at first visit, equal so no scrolling happens
     * on next or back, would be different
     */
    if (state.step === prevStep.current) return;
    const element = document.getElementById(CONTAINER_ID);
    element?.scrollIntoView();
    prevStep.current = state.step;
  }, [state.step]);

  return (
    <div
      className="justify-self-center grid padded-container max-w-[35rem] py-8 @sm:py-20 scroll-mt-6"
      id={CONTAINER_ID}
    >
      {props.endowType !== "ast" && (
        <Breadcrumbs
          className="font-body font-normal text-sm justify-self-start sm:justify-self-auto mb-10 sm:mb-12"
          items={[
            { title: "Marketplace", to: `${appRoutes.marketplace}/` },
            {
              title: props.name,
              to: `${appRoutes.marketplace}/${props.id}`,
            },
            {
              title: "Donate",
              to: `${appRoutes.donate}/${props.id}`,
            },
          ]}
        />
      )}

      {!isFinalized(state) && (
        <h3 className="text-center text-xl sm:text-3xl leading-snug mb-4">
          You're about to make a {PAYMENT_WORDS.noun.singular} to{" "}
          {state.recipient?.name}
        </h3>
      )}

      <Steps />
    </div>
  );
}

function isFinalized(state: DonationState): boolean {
  return (
    state.step === "tx" && (state.status === "error" || "hash" in state.status)
  );
}

//memoize to prevent useEffect ( based on props ) from running when parent re-renders with the same props
export default memo(Content);
