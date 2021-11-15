import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Wrapper } from "./Elements";
import { Button } from "@mui/material";
import { StripeCardElement } from "@stripe/stripe-js";
import { createFirstPayment } from "../../actions/actions";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	createFirstPaymentProps: any;
}

const TestPayments: React.FC<IProps> = ({ createFirstPaymentProps }) => {
	const stripe = useStripe();
	const elements = useElements();
	const handleAddCard = async () => {
		if (!elements || !stripe) {
			return;
		}
		const cardElement = elements.getElement("card");
		const resp = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement as StripeCardElement,
			billing_details: {
				name: "Jan Pawel",
			},
		});
		createFirstPaymentProps({ amount: 100 * 100, currency: "pln", payment_method: resp.paymentMethod?.id });
	};
	return (
		<Wrapper>
			<CardElement />
			<Button onClick={handleAddCard}>Submit</Button>
		</Wrapper>
	);
};

export default connect(null, { createFirstPaymentProps: createFirstPayment })(TestPayments);
