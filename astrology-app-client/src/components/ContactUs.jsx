import { Navbar } from "./Navbar";

export const ContactUs = () => {
  return (
    <>
      <Navbar/>
          <div className="bg-gray-100 py-10 px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
    </>

  );
};
