import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

interface IProps {
	children: JSX.Element;
}

const stripePromise = loadStripe("pk_test_51JvvJdC9WfbHisyeDDjE2T61kWXpLiwFWKRIq6Wzu03lRSCeDXSsPeNK20nsO8MiMozDRwd5KJr83FzULZ39x5a000ENpnRlL6");

const StripeProvider: React.FC<IProps> = ({ children }) => {
	const clientSecret = "seti_1JvxrFC9WfbHisyePFzTiYiy_secret_KbABQWf1aAAjYG17pCoReUlJc32ZMS3";
	const options = {
		clientSecret,
	};
	return (
		<Elements stripe={stripePromise} options={options}>
			{children}
		</Elements>
	);
};

export default StripeProvider;
