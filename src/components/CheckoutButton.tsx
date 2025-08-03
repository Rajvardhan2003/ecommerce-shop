'use client';

import Script from 'next/script';

const CheckoutButton = () => {
  const handlePayment = async () => {
    const res = await fetch('/api/create-order', {
      method: 'POST',
    });

    const data = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: 'INR',
      name: 'The Shraj Store',
      description: 'Test Transaction',
      order_id: data.id,
      handler: function (response: any) {
        alert('Payment successful: ' + response.razorpay_payment_id);
        // Save order to Firebase here (optional)
      },
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
        contact: '9999999999',
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <button
        onClick={handlePayment}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Pay with Razorpay
      </button>
    </>
  );
};

export default CheckoutButton;
