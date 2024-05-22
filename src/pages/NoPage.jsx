import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Página no encontrada 🙀</h1>
      <p className="text-lg mb-8">Esta página no existe.</p>
      <Link to="/" className="text-primary font-bold hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}
export default NoPage;
