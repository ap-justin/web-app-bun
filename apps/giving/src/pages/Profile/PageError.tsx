import Icon from "@giving/components/Icon";
import { appRoutes } from "@giving/constants/routes";
import { Link } from "react-router-dom";

export default function PageError() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen gap-2 bg-blue dark:bg-blue-d5 text-red-l4 dark:text-red-l2">
      <Icon type="Warning" size={30} />
      <p className="text-lg text-center">Failed to load endowment profile</p>
      <Link
        to={`${appRoutes.index}`}
        className="text-blue-l5 hover:text-blue text-sm"
      >
        back to Marketplace
      </Link>
    </section>
  );
}
