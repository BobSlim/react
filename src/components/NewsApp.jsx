import { useEffect, useState } from "react";
import { SearchBarForm } from "./NewsSearchBarForm";
import { Article } from "./NewsArticle";
const API_KEY = "ab3b3bf949324614847ba7db43e668d7";

const getNews = async ({ search: query, from, to }) => {
	const searchParams = new URLSearchParams();
	searchParams.append("language", "en");
	searchParams.append("q", query);
	from && searchParams.append("from", from);
	to && searchParams.append("to", to);
	const response = await fetch(
		`https://newsapi.org/v2/everything?${searchParams.toString()}`,
		{
			method: "GET",
			mode: "cors",
			headers: {
				"X-Api-Key": API_KEY,
			},
		},
	);
	const articles = await response.json();
	return articles;
};

export const App = () => {
	const [loading, setLoading] = useState(true);
	const [articles, setArticles] = useState({});
	const [query, setQuery] = useState({ search: "kittens" });

	const getData = async (query) => {
		const data = await getNews(query);
		setArticles(data);
		setLoading(false);
		console.log(data);
	};

	useEffect(() => {
		getData(query);
	}, [query]);

	return (
		<>
			<header>
				{loading ? null : (
					<p>Found {articles.totalResults} articles!</p>
				)}
				<SearchBarForm callBack={setQuery} />
			</header>
			<main>
				{loading
					? null
					: articles.articles.map((x) => (
							<Article
								key={x}
								{...x}
								onClick={() => setActiveArticle(x)}
							></Article>
						))}
			</main>
		</>
	);
};

