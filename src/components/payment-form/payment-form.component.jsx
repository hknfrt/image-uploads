import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { PaymentButton, FormContainer,PaymentFormContainer } from './payment-form.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler =  async(e) => {
        e.preventDefault();
        if(!stripe || !elements) return;

    }

    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Cart Payment</h2>
            <CardElement/>
            <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;