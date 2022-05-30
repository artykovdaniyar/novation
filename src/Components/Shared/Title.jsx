import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Title = ({ children }) => {
	useEffect(() => {
		<Helmet>
			<title>{children}</title>
		</Helmet>;
	}, [children]);
};

export default Title;
