import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink
						exact
						className="nav-link"
						activeClassName="nav-link active"
						to="/"
					>
						Главная
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						className="nav-link"
						activeClassName="nav-link active"
						to="/posts/new"
					>
						Создать пост
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
