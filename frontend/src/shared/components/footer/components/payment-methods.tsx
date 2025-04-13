import { paymentMethods } from "../constants/payment-methods";

export const PaymentMethods = () => (
  <ul
    className="flex gap-4 mt-5 justify-center 
                md:mt-0"
  >
    {paymentMethods.map(({ name, icon }) => (
      <li
        key={name}
        className={`bg-white ${
          name === "Mastercard" ? "px-3" : "px-2"
        } content-center rounded-lg`}
      >
        <img
          src={icon}
          alt={name}
          className={`${name === "Mastercard" ? "h-5" : "w-10 h-10"}`}
        />
      </li>
    ))}
  </ul>
);
