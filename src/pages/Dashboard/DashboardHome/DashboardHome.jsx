import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import {
	BsFillEnvelopeOpenFill,
	BsCart4,
	BsPersonPlus,

} from "react-icons/bs";
/* import {
	LineChart,
	BarChart,
	GeographyChart,
	ProgressCircle,
} from "../../components"; */

const DashboardHome = () => {
	const mockTransactions = [
		{ txId: "TX123", user: "John Doe", date: "2024-06-30", cost: 123.45 },
		{ txId: "TX124", user: "Jane Smith", date: "2024-06-29", cost: 234.56 },
		// Add more transactions as needed
	];

	return (
		<div className="p-6">
			{/* HEADER */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-semibold text-gray-800">
					Dashboard
				</h1>
				<button className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-2 rounded-lg">
					<AiOutlineDownload className="w-5 h-5" />
					<span>Download Reports</span>
				</button>
			</div>

			{/* GRID & CHARTS */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:grid-cols-3">
				{/* StatBox components */}
				<div className="bg-gray-200 p-4 rounded-lg">
					<div className="flex items-center justify-center">
						<BsFillEnvelopeOpenFill className="w-8 h-8 text-green-500" />
					</div>
					<h2 className="text-2xl font-bold text-center mt-4">
						12,361
					</h2>
					<p className="text-gray-600 text-center">Emails Sent</p>
					<div className="flex justify-between mt-4">
						<span className="text-green-500 font-semibold">
							+14%
						</span>
						<span className="text-gray-600">Progress: 75%</span>
					</div>
				</div>
				<div className="bg-gray-200 p-4 rounded-lg">
					<div className="flex items-center justify-center">
						<BsCart4 className="w-8 h-8 text-green-500" />
					</div>
					<h2 className="text-2xl font-bold text-center mt-4">
						431,225
					</h2>
					<p className="text-gray-600 text-center">Sales Obtained</p>
					<div className="flex justify-between mt-4">
						<span className="text-green-500 font-semibold">
							+21%
						</span>
						<span className="text-gray-600">Progress: 50%</span>
					</div>
				</div>
				<div className="bg-gray-200 p-4 rounded-lg">
					<div className="flex items-center justify-center">
						<BsPersonPlus className="w-8 h-8 text-green-500" />
					</div>
					<h2 className="text-2xl font-bold text-center mt-4">
						32,441
					</h2>
					<p className="text-gray-600 text-center">New Clients</p>
					<div className="flex justify-between mt-4">
						<span className="text-green-500 font-semibold">
							+5%
						</span>
						<span className="text-gray-600">Progress: 30%</span>
					</div>
				</div>
				<div className="bg-gray-200 p-4 rounded-lg">
					<div className="flex items-center justify-center">
						<BsPersonPlus className="w-8 h-8 text-green-500" />
					</div>
					<h2 className="text-2xl font-bold text-center mt-4">
						1,325,134
					</h2>
					<p className="text-gray-600 text-center">
						Traffic Received
					</p>
					<div className="flex justify-between mt-4">
						<span className="text-green-500 font-semibold">
							+43%
						</span>
						<span className="text-gray-600">Progress: 80%</span>
					</div>
				</div>

				{/* Revenue Generated */}
				<div className="bg-gray-200 p-6 rounded-lg col-span-2">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-2xl font-bold text-gray-800">
							Revenue Generated
						</h2>
						<button className="flex items-center space-x-2 bg-green-500 text-white px-3 py-2 rounded-lg">
							<AiOutlineDownload className="w-5 h-5" />
							<span>Download</span>
						</button>
					</div>
					<h3 className="text-green-500 font-bold text-3xl">
						$59,342.32
					</h3>
					<div className="h-60 mt-4">
						<LineChart isDashboard={true} />
					</div>
				</div>

				{/* Recent Transactions */}
				<div className="bg-gray-200 p-4 rounded-lg col-span-2">
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						Recent Transactions
					</h2>
					{mockTransactions.map((transaction, index) => (
						<div
							key={index}
							className="flex justify-between items-center py-2 border-b border-gray-400"
						>
							<div>
								<h3 className="text-green-500 font-semibold">
									{transaction.txId}
								</h3>
								<p className="text-gray-600">
									{transaction.user}
								</p>
							</div>
							<div className="text-gray-600">
								{transaction.date}
							</div>
							<div className="bg-green-500 text-white px-3 py-1 rounded">
								${transaction.cost}
							</div>
						</div>
					))}
				</div>

				{/* Campaign */}
				<div className="bg-gray-200 p-6 rounded-lg">
					<h2 className="text-2xl font-bold text-gray-800">
						Campaign
					</h2>
					<div className="flex flex-col items-center mt-4">
						<ProgressCircle size="125" />
						<h3 className="text-green-500 font-bold text-lg">
							$48,352 revenue generated
						</h3>
						<p className="text-gray-600">
							Includes extra misc expenditures and costs
						</p>
					</div>
				</div>

				{/* Sales Quantity */}
				<div className="bg-gray-200 p-6 rounded-lg">
					<h2 className="text-2xl font-bold text-gray-800">
						Sales Quantity
					</h2>
					<div className="h-60 mt-4">
						<BarChart isDashboard={true} />
					</div>
				</div>

				{/* Geography Based Traffic */}
				<div className="bg-gray-200 p-6 rounded-lg">
					<h2 className="text-2xl font-bold text-gray-800">
						Geography Based Traffic
					</h2>
					<div className="h-48 mt-4">
						<GeographyChart isDashboard={true} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardHome;
