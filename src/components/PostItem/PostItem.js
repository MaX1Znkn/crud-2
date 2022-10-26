import moment from "moment";
import { Link } from "react-router-dom";

const PostItem = ({ item }) => {
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
					<br />
					<b>Wise Tree</b>
				</div>

				<div>{moment(item.created).format("HH:mm DD.MM.YYYY")}</div>
			</div>
			<hr />
			<blockquote>
				<p>{item.content}</p>
			</blockquote>
			<hr />
			<div>
				<Link
					to={{
						pathname: `/posts/${item.id}`,
						state: { data: item },
					}}
				>
					Перейти к посту
				</Link>
			</div>
		</div>
	);
};
export default PostItem;
