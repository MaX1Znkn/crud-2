import { useState } from "react";
import { NavLink } from "react-router-dom";

const NewPost = () => {
	const [value, setValue] = useState("");
	const onChange = (event) => {
		setValue(event.target.value);
	};

	const onSubmit = (event) => {
		const data = async () => {
			try {
				const response = await fetch("http://localhost:7777/posts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json;charset=utf-8",
					},
					body: JSON.stringify({ id: 0, content: value }),
				});
				if (!response.ok) {
					throw new Error(response.statusText);
				}
			} catch (e) {
				console.error(e);
			}
		};
		data();
	};

	return (
		<form>
			<div>
				<h4>Новый пост</h4>
				<NavLink style={{ textDecoration: "none" }} to="/">
					<span className="material-icons">highlight_off</span>
				</NavLink>
			</div>

			<div>
				<div>
					<img
						alt=""
						style={{
							borderRadius: "50%",
							height: "50px",
							width: "50px",
						}}
						src="https://www.w3schools.com/howto/img_avatar.png"
					/>
					<br />
					<b>Wise Tree</b>
				</div>
			</div>

			<div>
				<input
					type="text"
					placeholder="Введите текст"
					value={value}
					onChange={(event) => onChange(event)}
				/>
			</div>

			<div>
				<NavLink to="/" onClick={(event) => onSubmit(event)}>
					Опубликовать
				</NavLink>
			</div>
		</form>
	);
};
export default NewPost;
