import { Link } from "react-router-dom";


export function Login() {
    return (
        <main className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600">Senha:</label>
                        <input className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Login</button>
                    <div className="text-center mt-10 ">
                        <Link to={'/register'} className="text-blue-500 underline">Cadastre-se</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}