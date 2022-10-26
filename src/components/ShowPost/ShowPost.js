import moment from "moment";
import { NavLink } from "react-router-dom";

const ShowPost = (props) => {
	const onDel = (i) => {
		fetch(`http://localhost:7777/posts/${i}/`, {
			method: "DELETE",
			headers: {},
		});
	};

	return (
		<div>
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
					<div></div>
					<b>Wise Tree</b>
				</div>

				<div>
					{moment(props.location.state.data.created).format(
						"HH:mm DD.MM.YYYY"
					)}
				</div>
			</div>
			<hr />
			<blockquote>
				<p>{props.location.state.data.content}</p>
			</blockquote>
			<hr />
			<div>
				<NavLink
					to={{
						pathname: `/edit`,
						state: { data: props.location.state },
					}}
				>
					<button>Изменить</button>
				</NavLink>

				<NavLink to="/">
					<button onClick={() => onDel(props.match.params.id)}>
						Удалить
					</button>
				</NavLink>
			</div>
		</div>
	);
};
export default ShowPost;
