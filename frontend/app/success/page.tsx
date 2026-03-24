export default function SuccessPage() {
  return (
    <main className="mx-auto max-w-2xl p-6 text-center">
      <h1 className="text-2xl font-bold">🎉 Order Placed Successfully!</h1>

      <p className="mt-4 text-gray-600">
        Thank you for ordering from Gojiswa Graha Udyog.
      </p>

      <p className="mt-2 text-gray-600">Your order will be delivered soon.</p>

      <a
        href="/"
        className="mt-6 inline-block rounded-xl bg-black px-6 py-3 text-white"
      >
        Go Back to Home
      </a>
    </main>
  );
}
