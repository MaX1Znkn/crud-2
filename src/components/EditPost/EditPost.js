import moment from "moment";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const EditPost = (props) => {
	const [value, setValue] = useState(props.location.state.data.data.content);
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
					body: JSON.stringify({
						id: props.location.state.data.data.id,
						content: value,
					}),
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
				<div>
					<h4>Редактировать пост</h4>
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
					<div>
						{moment(props.location.state.data.created).format(
							"HH:mm DD.MM.YYYY"
						)}
					</div>
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
					Сохранить
				</NavLink>
			</div>
		</form>
	);
};

export default EditPost;
