import React, { useState } from "react";

import { MENU } from "./constants";

export default function MenuButtons({ onDishSelect }) {
	const [selectedItem, setSelectedItem] = useState("Ещё ничего не заказал");
	const onSelect = (menuItem) => {
		setSelectedItem(`Заказано: ${menuItem}`);
		onDishSelect(menuItem);
	};

	return (
		<div className="menu-buttons">
			<ul>
				{MENU.map((menuItem) => {
					return (
						<li key={menuItem}>
							<button onClick={() => onSelect(menuItem)}>{menuItem}</button>
						</li>
					);
				})}
			</ul>
			<h3>{selectedItem}</h3>
		</div>
	);
}
