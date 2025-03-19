import { useRef, useState, useEffect } from 'react';
import Article from './Article';
import '../css/carousel.scss';

type Articles = {
	Title: string;
	URL_Link?: string;
	'Alt Text'?: string;
	Image_Link?: string;
};

const Carousel = ({
	title,
	id,
	articles,
}: {
	title: string;
	id: string;
	articles: Articles[];
}) => {
	const carousel = useRef<HTMLUListElement>(null);
	const [listening, setListener] = useState(false);
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		let carouselRef;
		if (carousel && !listening) {
			carousel.current!.addEventListener('scroll', () => {
				const scrollLeft = carousel.current!.scrollLeft;
				setScroll(scrollLeft);
			});

			setListener(true);
			carouselRef = carousel.current;
		}

		return () => {
			carouselRef!.removeEventListener('scroll', () => {
				const scrollLeft = carouselRef!.scrollLeft;
				setScroll(scrollLeft);
			});
		};
	}, []);

	return (
		<section id={id}>
			<h3>{title}</h3>
			<div>
				<ul ref={carousel}>
					{articles.map((article) => (
						<li key={article.Title}>
							<Article
								title={article.Title}
								link={article.URL_Link}
								image={article.Image_Link}
								alt={article['Alt Text']}
							/>
						</li>
					))}
				</ul>
				<button
					className={`btn right`}
					style={{
						opacity:
							carousel.current &&
							scroll === carousel.current.scrollWidth - carousel.current.clientWidth
								? 0
								: 1
					}}
					onClick={() => {
						carousel.current!.scrollTo({
							top: 0,
							left: Math.min(
								scroll + 400,
								carousel.current!.scrollWidth - carousel.current!.clientWidth
							),
							behavior: 'smooth'
						});
					}}
				>
					&rsaquo;
				</button>
				<button
					className={`btn left`}
					style={{
						opacity: scroll === 0 ? 0 : 1
					}}
					onClick={() => {
						carousel.current!.scrollTo({
							top: 0,
							left: Math.max(scroll - 400, 0),
							behavior: 'smooth'
						});
					}}
				>
					&lsaquo;
				</button>
			</div>
		</section>
	);
};

export default Carousel;
