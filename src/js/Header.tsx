import "../css/header.scss"

const Header = () => {
    return (
			<header>
				<div className="header-container">
					<a href="https://www.michigandaily.com/">
						<img src="src/assets/logo-small-white.png" alt="" id="logo"></img>
					</a>
					<h1>2025 CSG Election Guide</h1>
				</div>
				{/* TODO: update with voting site link */}
				<a href="https://www.michigandaily.com/" id="vote-button">
					<h1>Vote HERE March 26-27</h1>
				</a>
			</header>
		);
}

export default Header;

