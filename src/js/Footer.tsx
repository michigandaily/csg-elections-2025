import '../css/footer.scss';

const Footer = () => {
	return (
		<footer>
			<div id="credit">
				<img id="logo" className="logo" src="logo-small.svg" alt="Michigan Daily Logo" />
				<div id="credit-copy">
					<b>The Michigan Daily</b>
					<small>
						<b>Designed by Edith Pendell</b>
						<br></br>
						<b>Developed by Emily Chen, Julia Mei, Jessica Li and Darrin Zhou</b>
					</small>
					<small>
						<b>Photo by Akul Gunukula</b>
					</small>
					<small>420 Maynard Street, Ann Arbor, MI 48105</small>
				</div>
			</div>
			<div id="copyright">
				<small>&copy; 2025 One hundred and thirty-four years of editorial freedom</small>
			</div>
		</footer>
	);
};

export default Footer;
