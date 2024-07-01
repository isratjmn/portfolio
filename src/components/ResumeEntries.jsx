import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import useAxios from "../Hooks/UseAxios";
import { RotateLoader } from "react-spinners";

const ResumeEntries = () => {
	const [axiosSecure] = useAxios();
	const [resumeData, setResumeData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchResumeData = async () => {
			try {
				const response = await axiosSecure.get("/api/resume");
				setResumeData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchResumeData();
	}, [axiosSecure]);

	if (loading)
		return (
			<div className="flex items-start justify-center h-screen">
				<RotateLoader color="#F6CFFC" loading={loading} size={13} />
			</div>
		);
	if (error) return <p>Error: {error.message}</p>;

	const formatDate = (date) => {
		const formattedDate = format(new Date(date), "do MMMM, yyyy");
		return formattedDate;
	};

	const truncateDescription = (desc, maxLength = 60) => {
		if (desc.length > maxLength) {
			return `${desc.substring(0, maxLength)}...`;
		}
		return desc;
	};

	return (
		<>
			<div className="container mx-auto p-3 text-[14px]">
				<table className="min-w-full bg-white rounded-lg shadow-2xl">
					<thead>
						<tr>
							<th className="py-2 px-4 border-b">SL No.</th>
							<th className="py-2 px-4 border-b w-[10%]">
								Title
							</th>
							<th className="py-2 px-4 border-b">Description</th>
							<th className="py-2 px-4 border-b w-[15%]">
								Start Date
							</th>
							<th className="py-2 px-4 border-b w-[15%]">
								End Date
							</th>
						</tr>
					</thead>
					<tbody>
						{resumeData.map((entry, index) => (
							<tr key={index}>
								<td className="py-3 px-4">{index + 1}</td>

								<td className="py-2 px-4 border-b">
									{entry.title}
								</td>
								<td className="py-2 px-4 border-b">
									{truncateDescription(entry.desc)}
								</td>
								<td className="py-2 px-4 border-b">
									{formatDate(entry.startDate)}
								</td>
								<td className="py-2 px-4 border-b">
									{formatDate(entry.endDate)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ResumeEntries;
