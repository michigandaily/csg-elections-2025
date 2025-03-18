import candidates from '../data/candidates.json';
import '../css/info.scss';

const Ballot = () => {
	return (
		<div className="ballot-container">
			<h1> What&apos;s on the Ballot?</h1>
			<h3>Executive</h3>
			<div className="candidates">
				{candidates.executive.map((candidate) => {
					const [name, party] = candidate.split(' - ');

					return (
						<p key={candidate}>
							☐ {name}
							{party && <strong> - {party}</strong>}
						</p>
					);
				})}
			</div>
			<h3>DPSS Board Representative</h3>
			<div className="candidates">
				{candidates.dpss.map((candidate) => {
					const [name, party] = candidate.split(' - ');

					return (
						<p key={candidate}>
							☐ {name}
							{party && <strong> - {party}</strong>}
						</p>
					);
				})}
			</div>
			<h3>Constitutional Amendments</h3>
			<div className="candidates">
				{candidates.amendments.map((candidate) => {
					return (
						<p key={candidate}>
							☐ {candidate}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default Ballot;
