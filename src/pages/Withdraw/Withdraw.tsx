import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Formik, Field, Form, FormikHelpers } from "formik";
import AppHead from "components/Headers/AppHead";
import Loader from "components/Loader/Loader";
import toCurrency from "helpers/toCurrency";
import Liquid from "./Liquid";
import Locked from "./Locked";
// import WithdrawForm from "./WithdrawForm";
import useWithdraw from "./useWithdraw";

interface Values {
  strategy: string;
}

export default function Withdraw() {
  const [showModal, setShowModal] = useState(false);
  const { isReady, isLoading, error, locked, liquid, overall } = useWithdraw();

  return (
    <section className="pb-16 grid content-start h-screen">
      <AppHead />
      {error && (
        <div className="min-h-leader-table grid place-items-center">
          <p className="uppercase text-white-grey">{error}</p>
        </div>
      )}
      {isLoading && (
        <div className="min-h-leader-table grid place-items-center">
          <Loader
            gapClass="gap-4"
            widthClass="w-4"
            bgColorClass="bg-white-grey"
          />
        </div>
      )}
      {isReady && (
        <div className="mt-8 mx-auto w-auto text-white-grey">
          <h2 className="pt-8 pl-6 uppercase text-lg font-bold">
            Total Balance: $ {toCurrency(overall)}
          </h2>
          <div className="flex items-stretch mt-3 mx-4">
            <Liquid liquidBalance={liquid} />
            <Locked lockedBalance={locked} />
          </div>
          <div className="flex justify-start mt-4 pl-6">
            {/*//TODO: should disable/hide when curr wallet_addr is not endowment owner */}
            <button
              className="uppercase hover:bg-blue-accent bg-angel-blue rounded-lg w-56 h-12 text-sm font-bold"
              onClick={() => setShowModal(true)}
            >
              Withdraw from Accounts
            </button>
          </div>
          <div>
            {showModal ? (
              <div className="fixed bg-gray-800 bg-opacity-80 w-full h-full top-0 left-0 right-0 bottom-0 z-50 grid place-items-center">
                <div className="p-6 place-items-center bg-white-grey w-full max-w-xs min-h-r15 rounded-xl shadow-lg overflow-hidden relative">
                  <button
                    className="absolute top-3 right-3"
                    onClick={() => setShowModal(false)}
                  >
                    <IoCloseOutline className="text-angel-grey" />
                  </button>
                  <h3 className="mb-1 text-lg text-angel-grey text-center font-semibold font-heading">
                    Withdraw from Accounts
                  </h3>
                  <p className="mb-2 text-angel-grey text-center text-xs">
                    Enter the quantity of tokens to withdraw from each of the
                    active Liquid Account's current strategies.
                  </p>
                  {/* <WithdrawForm /> */}
                  <div className="text-angel-grey">
                    <Formik
                      initialValues={{ strategy: "" }}
                      onSubmit={(
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>
                      ) => {
                        setSubmitting(false);
                      }}
                    >
                      <Form>
                        <label htmlFor="strategy">Anchor Protocol</label>
                        <p>$ {toCurrency(liquid)}</p>
                        <Field
                          className="bg-gray-200"
                          id="strategy"
                          name="strategy"
                          autoComplete="off"
                          type="text"
                        />
                        <div className="flex justify-around mt-6">
                          <button
                            type="submit"
                            className="uppercase hover:bg-blue-accent bg-angel-blue rounded-lg w-28 h-8 text-white-grey text-sm font-bold"
                          >
                            Withdraw
                          </button>
                          <button
                            onClick={() => setShowModal(false)}
                            className="uppercase hover:bg-angel-orange bg-orange rounded-lg w-28 h-8 text-white-grey text-sm font-bold"
                          >
                            Cancel
                          </button>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}
