import React, { Suspense, lazy } from "react";
import Loader from "../elements/Loader/Loader";
import Default from "../components/Default";

const CalculatorContent = lazy(() => import("@elements/Calculator/CalculatorContent"));

const Calculator = () => {
	return (
		<Default height="90%" heading="Calculator" resizable={false} programName="Calculator">
			<Suspense fallback={<Loader />}>
				<CalculatorContent />
			</Suspense>
		</Default>
	);
};


export default Calculator;
