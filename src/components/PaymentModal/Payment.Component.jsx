import { Dialog, Transition } from "@headlessui/react";
import { Fragment} from "react";

export default function PaymentModal({ isOpen, setIsOpen, price }) {

  function closeModal() {
    setIsOpen(false);
  };

  const launchRazorpay = () => {
      let options = {
          key: "rzp_test_assH4R2Kv2r3C2",
          amount: price*100,
          currency: "INR",
          name: "Book My Show Clone",
          image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
          description: "Movie Rental or Buying",
          handler: () => {
                setIsOpen(false);
                alert("Payment Done!!");
          },
          theme: {color: "#c4242d"},
      };

      let razorpay = new window.Razorpay(options);
      razorpay.open();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Please make a Payment.
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Hello please click on the button below to make payment.
                  </p>
                </div>

                <div className=" w-full mt-4">
                  <button
                    type="button"
                    className=" w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-800 bg-red-100 border border-transparent rounded-md hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={launchRazorpay}
                  >
                    pay ₹ {price}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-800 bg-red-100 border border-transparent rounded-md hover:bg-red-600 hover:text-white "
                    onClick={closeModal}
                  >
                    Cancel payment
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
