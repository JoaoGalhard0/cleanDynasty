import { Link } from "react-router-dom";

export function Register() {
    return (
        <main className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Nome:</label>
                        <input className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Email</label>
                        <input type="password" id="password" name="password" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Senha</label>
                        <input type="password" id="password" name="password" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600">Confirme sua Senha</label>
                        <input className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600">Telefone</label>
                        <input className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <button className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Cadastrar</button>
                    <div className="mt-4 text-center">
                        <Link to="/login" className="text-blue-500">Voltar para o Login</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}