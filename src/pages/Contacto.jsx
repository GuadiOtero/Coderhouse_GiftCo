import Bgpusheen from "../assets/Bgpusheen.png";

function Contacto() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#FEE4ED]"
      style={{
        backgroundImage: `url(${Bgpusheen})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-lg  max-h-lg w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Contacto
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border 
              border-gray-300 rounded-md p-2 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border 
              border-gray-300 rounded-md p-2 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border 
              border-gray-300 rounded-md p-2 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-80 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
