import { useContext } from "react"
import { TransactionContext } from "@/contexts/Transaction.jsx"
import { useNavigate } from "react-router-dom"
import { Tooltip } from "@/components/Tooltip.jsx"

function Home() {
    const navigate = useNavigate()

    const { isLoading, connectWallet, transactions } = useContext(TransactionContext)

    const isDisabled = !transactions
    const handleButtonClick = path => {
        navigate(path)
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
            <h1 className="text-white text-4xl font-bold mb-8">Welcome to Web3-Packages Demo</h1>
            <div className="flex flex-col items-center space-y-6">
                <button
                    className="w-48 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-full hover:from-blue-500 hover:to-blue-700 transition duration-150 ease-in-out"
                    onClick={connectWallet}
                >
                    Connect Wallet
                </button>
                <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 p-6 rounded-xl shadow-2xl border border-gray-300 max-w-md w-full text-center">
                    <div className="text-gray-800 text-xl font-semibold mb-2">Transactions</div>
                    <div className="text-gray-700 text-base">{transactions.toString()}</div>
                </div>
                <div className="flex space-x-4">
                    <Tooltip text="Please connect your wallet first.">
                        <button
                            onClick={() => handleButtonClick("/edit")}
                            className={`w-40 py-2 px-4 rounded-full transition duration-150 ease-in-out ${
                                isDisabled
                                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                                    : "bg-purple-500 text-white hover:bg-purple-600 active:bg-purple-700"
                            }`}
                            disabled={isDisabled}
                        >
                            Edit
                        </button>
                    </Tooltip>
                    <Tooltip text="Please connect your wallet first.">
                        <button
                            onClick={() => handleButtonClick("/check")}
                            className={`w-40 py-2 px-4 rounded-full transition duration-150 ease-in-out ${
                                isDisabled
                                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                                    : "bg-purple-500 text-white hover:bg-purple-600 active:bg-purple-700"
                            }`}
                            disabled={isDisabled}
                        >
                            Check
                        </button>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default Home
