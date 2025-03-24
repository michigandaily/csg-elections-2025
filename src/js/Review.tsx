import '../css/info.scss';

const Review = () => {
	return (
		<div className="review-container">
			<a
				href="https://www.michigandaily.com/news/student-government/a-historic-year-of-student-government-shut-it-down/"
				className="article-link"
			>
				<iframe
					title="Student Orgs or Donations to Gaza? Fall '24 CSG Budget Debate"
					aria-label="Multiple Donuts"
					id="datawrapper-chart-8lr7p"
					src="https://datawrapper.dwcdn.net/8lr7p/1/"
					scrolling="no"
					frameBorder="0"
					style={{
						width: '100%',
						height: '535px',
						border: 'none',
						overflow: 'hidden'
					}}
				></iframe>
				<h2>A historic year of student government part one: SHUT IT DOWN</h2>
				<p>Glenn Hedin</p>
			</a>
			<a
				href="https://www.michigandaily.com/news/student-government/a-historic-year-of-student-government-part-two-trumps-shadow/"
				className="article-link"
			>
				<img
					src="https://www.michigandaily.com/wp-content/uploads/2025/03/real_KIT.jpg"
					alt="Front entrance of Union."
				></img>
				<h2>A historic year of student government part two: Trump&apos;s shadow</h2>
				<p>Glenn Hedin</p>
			</a>
		</div>
	);
};

export default Review;
