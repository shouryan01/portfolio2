"use client";

import React, { useEffect, useState } from "react";

const PreetikaCountdown = () => {
	const [timeLeft, setTimeLeft] = useState({});

	useEffect(() => {
		const calculateTimeLeft = () => {
			const difference = +new Date("2026-12-19") - +new Date();
			let timeLeft = {};

			if (difference > 0) {
				const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
				const months = Math.floor(
					(difference / (1000 * 60 * 60 * 24 * 30.44)) % 12,
				);
				const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30.44);
				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
				const minutes = Math.floor((difference / 1000 / 60) % 60);
				const seconds = Math.floor((difference / 1000) % 60);

				timeLeft = {
					years,
					months,
					days,
					hours,
					minutes,
					seconds,
				};
			}

			return timeLeft;
		};

		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const padWithZero = (num) => String(num).padStart(2, "0");

	return (
		<div className="p-6 bg-gray-100 rounded-lg shadow-md text-center mt-20">
			<h2 className="text-2xl font-bold mb-4 text-center">
				Countdown to December 19, 2026
			</h2>
			<div className="flex justify-around flex-wrap mb-10">
				{["years", "months", "days", "hours", "minutes", "seconds"].map(
					(unit) => (
						<div key={unit} className="text-center m-2">
							<span className="text-3xl font-bold">
								{unit === "seconds" || unit === "minutes"
									? padWithZero(timeLeft[unit])
									: timeLeft[unit]}
							</span>
							<p className="text-gray-600 capitalize">{unit}</p>
						</div>
					),
				)}
			</div>
			On this day I vow to meet her wherever she is in the world and get her
			back in my life forever ❤️
		</div>
	);
};

export default PreetikaCountdown;
