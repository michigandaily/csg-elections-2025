import Carousel from "./Carousel";
import "../css/articles.scss"
import ballot from '../data/ballot_articles.json';
import recent from '../data/recent_articles.json';

const Articles = () => {
    return (
			<div className="articles-container">
				<Carousel id="ballot" title="On&nbsp;The&nbsp;Ballot" articles={ballot} />
				<Carousel id="recent" title="Recent&nbsp;at&nbsp;CSG" articles={recent} />
			</div>
		);
}

export default Articles;