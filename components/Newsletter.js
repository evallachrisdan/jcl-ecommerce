export default function Newsletter() {
  return (
    <div
      className="mx-auto bg-gray-100 py-8 flex items-center justify-center"
      style={{
        minHeight: "400px",
      }}
    >
      <div className="text-center px-5">
        <h3>Yes! Send me exclusive offers and unique gift ideas.</h3>
        <div className="max-w-md w-full mx-auto my-6">
          <form className="w-full max-w-md">
            <div className="flex items-center">
              <input
                className="appearance-none bg-white w-full text-gray-700 mr-3 py-2 px-2 outline-none"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="btn bg-black text-white border-black py-2 px-4 uppercase"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
