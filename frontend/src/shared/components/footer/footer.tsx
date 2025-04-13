import { FormSubscribeUser } from "./components/form-subscribe-user";
import { InfoColumnsLinks } from "./components/info-columns-links";
import { PaymentMethods } from "./components/payment-methods";
import { SocialNetworks } from "./components/social-networks";

export const Footer = () => {
  return (
    <footer
      className="relative bg-[#F0F0F0] flex flex-col items-center pt-40
                    xs:pt-36 sm:pt-30 md:pt-29"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
        <FormSubscribeUser />
      </div>

      <div className="lg:flex-row sm:w-[90%]">
        <div
          className="flex flex-col gap-3 p-5 mb-5 
                        sm:p-0"
        >
          <div
            className="flex flex-col gap-4 
                        lg:flex-row lg:justify-between lg:gap-20"
          >
            <div
              className="space-y-3 
                            md:flex md:flex-col md:gap-2 md:space-y-1
                            lg:w-[36%]
                            xl:pr-20"
            >
              <h2 className="text-3xl font-black">SHOP.CO</h2>
              <p className="text-black/60 text-sm">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <SocialNetworks />
            </div>
            <InfoColumnsLinks />
          </div>

          <div>
            <hr className="my-5" />
            <div className="md:flex md:justify-between md:items-center md:mt-5">
              <p className="text-black/60 text-sm text-center my-1">
                Shop.co © 2000-2025, All Rights Reserved
              </p>
              <PaymentMethods />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
