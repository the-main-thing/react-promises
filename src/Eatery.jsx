import React, { useState } from "react";

import MenuButtons from "./MenuButtons";
import Dish from "./Dish";
import makeAnOrder from "./makeAnOrder";

export default function Eatery() {
	const [dish, setDish] = useState("");
	const [isCooking, setIsCooking] = useState(false);

	const onDishSelect = async (menuItem) => {
		setIsCooking(true);
		const dish = await makeAnOrder(menuItem);
		setIsCooking(false);
		setDish(dish);
	};

	return (
		<div>
			<h2>Столовая</h2>
			<MenuButtons onDishSelect={onDishSelect} />
			<Dish dish={dish} isCooking={isCooking} />
		</div>
	);
}
