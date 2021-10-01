import lebawski from "./images/lebawski.gif";

export default function Dish({ dish, isCooking }) {
	return (
		<div className="dish">
			<h3>Тарелка</h3>
			{(() => {
				switch (true) {
					case isCooking:
						return <img alt="" src={lebawski} />;
					case Boolean(dish):
						return <img alt="" src={dish} />;
					default:
						return null;
				}
			})()}
		</div>
	);
}
