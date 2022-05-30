const calculateMonthlyPayment = (principal, years) => {
	const interest = 6;
	const calculatedInterest = interest / 100 / 12;
	const calculatedPayment = parseFloat(years) * 12;
	const x = Math.pow(1 + calculatedInterest, calculatedPayment);
	const monthly = parseInt((principal * x * calculatedInterest) / (x - 1));
	return monthly;
};

export default calculateMonthlyPayment;
