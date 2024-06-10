import styles from "./NewsArticle.module.css"

export const Article = ({ title, urlToImage, content, url }) => {
	return (
		<article className={styles.article}>
			<a href={url}>
				<img src={urlToImage} alt={title} />
				<h3> {title} </h3>
			</a>
			<p> {content} </p>
		</article>
	);
};
