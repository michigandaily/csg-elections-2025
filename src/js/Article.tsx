import { useRef, useEffect } from 'react';

const Article = ({
	title,
	author,
	link,
	image,
	alt
}: {
	title: string;
	author: string;
	link: string | undefined;
	image: string | undefined;
	alt: string | undefined;
}) => {
	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						observer.unobserve(ref.current as Element);
					}
				});
			},
			{
				threshold: window.innerWidth <= 800 ? 0.1 : 0.35
			}
		);

		observer.observe(ref.current as Element);

		return () => {
			observer.disconnect();
		};
	}, [ref]);
	return (
		<a href={link}>
			<article ref={ref}>
				<img loading="lazy" src={image} alt={alt} />
				<p>{title}</p>
				<address>{author}</address>
			</article>
		</a>
	);
};

export default Article;