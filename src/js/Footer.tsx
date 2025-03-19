import '../css/footer.scss';

const Footer = () => {
	return (
		<footer>
			<div id="credit">
				<img id="logo" className="logo" src="src/assets/logo-small.svg" alt="Michigan Daily Logo" />{' '}
				<div id="credit-copy">
					<b>The Michigan Daily</b>
					<small>
						<b>Design and development by Emily Chen, Julia Mei, Jessica Li</b>
					</small>
					<small>
						<b>Artwork by</b>
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
