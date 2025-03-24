import candidates from '../data/candidates.json';
import '../css/info.scss';

const Ballot = () => {
	return (
		<div className="ballot-container">
			<h1> What&apos;s on the Ballot?</h1>
			<h3>Executive</h3>
			<div className="candidates">
				{candidates.executive.map((candidate) => {
					const name = candidate.candidate;
					const url = candidate.url;
					const party = candidate.party;

					return (
						<div key={name}>
							<p className="candidate-name">☐ {url !== '' ? <a href={url}>{name}</a> : name}</p>
							<p className="candidate-party">{party}</p>
						</div>
					);
				})}
			</div>
			<h3>
				<a href="https://www.michigandaily.com/news/student-government/meet-the-candidates-qa-with-candidates-for-umpd-oversight-committee/">
					DPSS Board Representative
				</a>
			</h3>
			<div className="candidates">
				{candidates.dpss.map((candidate) => {
					const name = candidate.candidate;
					const url = candidate.url;
					const party = candidate.party;

					return (
						<div key={name}>
							<p className="candidate-name">☐ {url !== '' ? <a href={url}>{name}</a> : name}</p>
							<p className="candidate-party">{party}</p>
						</div>
					);
				})}
			</div>

			<h3>
				<a href="https://www.michigandaily.com/news/student-government/a-students-guide-to-the-2025-csg-constitutional-amendments/">
					Constitutional Amendments
				</a>
			</h3>

			<div className="candidates">
				{candidates.amendments.map((candidate) => {
					const text = candidate.candidate;
					const url = candidate.url;

					return (
						<p key={text} className="candidate-name">
							☐ {url !== '' ? <a href={url}>{text}</a> : text}
						</p>
					);
				})}
			</div>
			<h3>Elected representatives</h3>
			<div className="candidates">
				<p className="candidate-name">
					Varies by school / college. Click{' '}
					<a href="https://docs.google.com/spreadsheets/d/1SrA8hGbhwkzDQrAKSX2jpYbeRVnXCpsNx0aMs9UQxNE/edit?gid=0#gid=0">
						here
					</a>{' '}
					to learn more.
				</p>
			</div>
		</div>
	);
};

export default Ballot;
