import { FormProvider } from "react-hook-form";
import Copier from "components/Copier";
import { PAYMENT_WORDS } from "constants/common";
import { adminRoutes } from "constants/routes";
import Seo from "../Seo";
import WidgetExample from "./WidgetExample";
import WidgetUrlGenerator from "./WidgetUrlGenerator";
import useWidgetConfigurer from "./useWidgetConfigurer";

const TITLE_STYLE = "text-lg sm:text-2xl";

export default function WidgetConfigurer() {
  const {
    endowId,
    updateTriggered,
    widgetSnippet,
    methods,
    handleUpdateSnippet,
  } = useWidgetConfigurer();

  return (
    <FormProvider {...methods}>
      <Seo
        title={`Widget Configuration${
          endowId === 0 ? "" : ` for Endowment ${endowId}`
        }`}
        url={`${adminRoutes.other_settings}${
          endowId === 0 ? "" : `/${endowId}`
        }`}
      />

      <div className="padded-container grid grid-rows-[auto_1fr] gap-10 w-full h-full py-5">
        <section className="flex flex-col gap-3 items-center text-center xl:items-start xl:text-left w-full">
          <h1 className={TITLE_STYLE}>
            Accept {PAYMENT_WORDS.noun.plural} from your website today!
          </h1>
          <div className="font-body text-sm sm:text-base">
            <p>
              Just configure your widget below, copy & paste the code on your
              website and you're ready to go!
            </p>
            <p>
              Your {PAYMENT_WORDS.payer}s will be able to connect their crypto
              wallets and use them to {PAYMENT_WORDS.verb} directly.
            </p>
          </div>
        </section>
        <div className="grid xl:grid-cols-2 max-xl:justify-center gap-10">
          <section className="xl:order-2 flex flex-col gap-3 items-center xl:items-start justify-self-stretch">
            <h2 className={TITLE_STYLE}>Configure your widget</h2>
            <WidgetUrlGenerator onChange={handleUpdateSnippet} />

            <h2 className={`${TITLE_STYLE} mt-10`}>
              Copy / paste this code snippet:
            </h2>
            <div className="flex items-center justify-center gap-4 h-32 w-full max-w-xl px-10 rounded bg-gray-l3 dark:bg-blue-d4">
              <span className="w-full text-sm sm:text-base font-mono break-all">
                {widgetSnippet}
              </span>
              <Copier
                classes="w-10 h-10 hover:text-orange"
                text={widgetSnippet}
              />
            </div>
          </section>

          <section className="flex flex-col gap-3 max-xl:items-center">
            <h2 className={TITLE_STYLE}>That's what our widget looks like:</h2>
            <WidgetExample trigger={updateTriggered} />
          </section>
        </div>
      </div>
    </FormProvider>
  );
}
