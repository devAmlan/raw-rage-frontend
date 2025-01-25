import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:mx-0 mx-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Refund Policy
        </h1>

        <p className="text-lg mb-6">
          At Rawrage.shop, we are committed to providing high-quality products
          and ensuring customer satisfaction. To maintain transparency, we have
          outlined our refund policy below:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">
              1. No Cash on Delivery (COD)
            </h2>
            <p className="text-lg">
              Rawrage.shop does not offer a Cash on Delivery (COD) payment
              option. All purchases must be completed using the available online
              payment methods at checkout.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. No Refund Policy</h2>
            <p className="text-lg">
              Due to the nature of our products and operations, we do not offer
              refunds under any circumstances. We encourage customers to
              carefully review their orders before completing the purchase.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Order Cancellations</h2>
            <p className="text-lg">
              Once an order has been placed and payment has been processed, it
              cannot be canceled or modified.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              4. Damaged or Defective Items
            </h2>
            <p className="text-lg">
              If you receive an item that is damaged, defective, or incorrect,
              please contact our customer support team within 48 hours of
              receiving your order. We will work with you to resolve the issue
              by providing a replacement or an alternative solution, at our
              discretion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Product Usage</h2>
            <p className="text-lg">
              If the product has been opened or used by the customer, no refund
              or replacement will be provided, regardless of the circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Contact Us</h2>
            <p className="text-lg">
              If you have any questions or concerns regarding your purchase,
              please reach out to our customer support team via [email/contact
              form] for assistance.
            </p>
          </div>
        </div>

        <p className="mt-8 text-lg text-center">
          By placing an order on Rawrage.shop, you agree to this refund policy.
          Thank you for understanding and supporting our business.
        </p>
      </div>
    </div>
  );
}

export default page;
