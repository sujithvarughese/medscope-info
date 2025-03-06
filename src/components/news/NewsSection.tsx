import axios from "axios";
import {useEffect, useState} from "react";
import NewsTile from "./NewsTile";
import {Box, Title} from "@mantine/core";

type articleProps = {
  source: { name: string };
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}

const NewsSection = () => {

  const [articles, setArticles] = useState<articleProps[]>([])

  const fetchNewsArticles = async () => {
    try {
      const responseHealth = await axios("https://newsapi.org/v2/everything?q=health&pageSize=20", {
        headers: {
          "X-Api-Key": import.meta.env.VITE_X_API_KEY
        }
      })
      let { articles: healthArticles } = responseHealth.data
      const filteredHealthArticles = healthArticles.filter((article: articleProps) => article["urlToImage"] !== null)
      setArticles(filteredHealthArticles)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNewsArticles()
  }, [])

  return (
    <Box style={styles.container}>

      <Title style={styles.title}>Top Medical News</Title>
      {/*
      <FeaturedArticle
        source={articles[0]?.source.name}
        title={articles[0]?.title}
        description={articles[0]?.description}
        url={articles[0]?.url}
        urlToImage={articles[0]?.urlToImage ?? ''}
        date={articles[0]?.publishedAt}
      />
      <FeaturedArticle
        source={articles[1]?.source.name}
        title={articles[1]?.title}
        description={articles[1]?.description}
        url={articles[1]?.url}
        urlToImage={articles[1]?.urlToImage ?? ''}
        date={articles[1]?.publishedAt}
      />
      <FeaturedArticle
        source={articles[2]?.source.name}
        title={articles[2]?.title}
        description={articles[2]?.description}
        url={articles[2]?.url}
        urlToImage={articles[2]?.urlToImage ?? ''}
        date={articles[2]?.publishedAt}
      />
      */}
      {articles?.map((item, index) =>
        <NewsTile
          key={index}
          source={item.source.name}
          title={item.title}
          description={articles[0]?.description}
          url={item.url}
          urlToImage={item.urlToImage ?? ''}
          date={item.publishedAt}
        />
      )}
    </Box>
 );
};

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  list: {

  }
};

export default NewsSection;