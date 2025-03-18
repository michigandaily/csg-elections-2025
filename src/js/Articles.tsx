import Carousel from "./Carousel";
import "../css/articles.scss"

const Articles = () => {
    return (
			<div className="articles-container">
				<Carousel />
				<Carousel />
			</div>
		);
}

export default Articles;