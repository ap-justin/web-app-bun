import { number, object, string } from "yup";
import { SchemaShape } from "schemas/types";
import {
  DonaterConfigFromWidget,
  TokensLookup,
  TokensWhitelist,
  WidgetURLSearchParams,
} from "types/widget";

const schema = object<any, SchemaShape<WidgetURLSearchParams>>({
  advancedOptionsDisplay: string()
    .required()
    .oneOf(["hidden", "collapsed", "expanded"]),
  isDescriptionTextShown: string().required().oneOf(["true", "false"]),
  liquidSplitPct: number().required().min(0).max(100),
  tokenWhiteList: string()
    .required()
    .matches(
      //TODO: update this regex when adding new chains
      /^(juno-1|uni-6|137|80001|1337|56|97|1|5|phoenix-1|pisco-1)\+[A-Za-z0-9]+(,(juno-1|uni-6|137|80001|1337|56|97|1|5|phoenix-1|pisco-1)\+[A-Za-z0-9]+)*$/
    ),
});

const fallbackConfig: DonaterConfigFromWidget = {
  isDescriptionTextShown: true,
  advancedOptionsDisplay: "expanded",
  liquidSplitPct: 50,
  tokensLookup: "all",
};

export default function donaterConfig(
  searchParams: URLSearchParams
): DonaterConfigFromWidget {
  try {
    const parsedConfig = Object.fromEntries(
      searchParams.entries()
    ) as WidgetURLSearchParams;

    if (!schema.isValidSync(parsedConfig)) {
      return fallbackConfig;
    }

    const tokensWhitelist: TokensWhitelist = parsedConfig.tokenWhiteList
      .split(",")
      .map((item) => item.split("+") as [string, string]);

    const tokensLookup: TokensLookup = tokensWhitelist.reduce(
      (result, [chainId, symbol]) => {
        result[chainId] ||= {};
        result[chainId][symbol] = true;
        return result;
      },
      {} as TokensLookup
    );

    return {
      isDescriptionTextShown: parsedConfig.isDescriptionTextShown === "true",
      advancedOptionsDisplay:
        parsedConfig.advancedOptionsDisplay as DonaterConfigFromWidget["advancedOptionsDisplay"],
      liquidSplitPct: +parsedConfig.liquidSplitPct,
      tokensLookup,
    };
  } catch (err) {
    console.error(err);
    return fallbackConfig;
  }
}
