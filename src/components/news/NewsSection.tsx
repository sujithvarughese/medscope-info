import axios from "axios";
import {useEffect, useState} from "react";
import NewsTile from "./NewsTile";
import {Box, Flex, Text, Title} from "@mantine/core";
import FeaturedArticle from "./FeaturedArticle.tsx";
import {Carousel} from "@mantine/carousel";
import {api} from "../../utilities/api.ts";

type articleProps = {
  source: { name: string };
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}

const NewsSection = () => {

  const [healthArticles, setHealthArticles] = useState<articleProps[]>([])
  const [scienceArticles, setScienceArticles] = useState<articleProps[]>([])

  const fetchNewsArticles = async () => {
    try {
      const response = await api.get("/news")
      setHealthArticles(response.data.filteredHealthArticles)
      setScienceArticles(response.data.filteredScienceArticles)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNewsArticles()
  }, [])

  return (
    <Flex direction="column" gap={32}>
      {!!healthArticles.length &&
      <Box>
        <Title style={styles.header}>Top Health News</Title>

        <Flex direction={{ base: "column", sm: "row" }} gap={16}>
          <FeaturedArticle
            source={healthArticles[0]?.source.name}
            title={healthArticles[0]?.title}
            description={healthArticles[0]?.description}
            url={healthArticles[0]?.url}
            urlToImage={healthArticles[0]?.urlToImage ?? ''}
            date={healthArticles[0]?.publishedAt}
          />
          <FeaturedArticle
            source={healthArticles[1]?.source.name}
            title={healthArticles[1]?.title}
            description={healthArticles[1]?.description}
            url={healthArticles[1]?.url}
            urlToImage={healthArticles[1]?.urlToImage ?? ''}
            date={healthArticles[1]?.publishedAt}
          />
        </Flex>
        <Carousel slideSize={{base: "50%", sm: "33.3%", md: "20%"}} height={300} align="start">
          {healthArticles?.slice(2).map((item, index) =>
            <Carousel.Slide key={index}>
              <NewsTile
                source={item.source.name}
                title={item.title}
                description={item.description}
                url={item.url}
                urlToImage={item.urlToImage ?? ''}
                date={item.publishedAt}
              />
            </Carousel.Slide>

          )}
        </Carousel>
      </Box>
      }
      {!!scienceArticles.length &&
      <Box>
        <Text style={styles.header}>Top Science News</Text>
        <Flex direction={{ base: "column", sm: "row" }} gap={16}>
          <FeaturedArticle
            source={scienceArticles[0]?.source.name}
            title={scienceArticles[0]?.title}
            description={scienceArticles[0]?.description}
            url={scienceArticles[0]?.url}
            urlToImage={scienceArticles[0]?.urlToImage ?? ''}
            date={scienceArticles[0]?.publishedAt}
          />
          <FeaturedArticle
            source={scienceArticles[1]?.source.name}
            title={scienceArticles[1]?.title}
            description={scienceArticles[1]?.description}
            url={scienceArticles[1]?.url}
            urlToImage={scienceArticles[1]?.urlToImage ?? ''}
            date={scienceArticles[1]?.publishedAt}
          />
        </Flex>

        <Carousel slideSize={{base: "50%", sm: "33.3%", md: "20%"}} height={300} align="start">
          {scienceArticles?.slice(2).map((item, index) =>
            <Carousel.Slide key={index}>
              <NewsTile
                source={item.source.name}
                title={item.title}
                description={item.description}
                url={item.url}
                urlToImage={item.urlToImage ?? ''}
                date={item.publishedAt}
              />
            </Carousel.Slide>
          )}
        </Carousel>
      </Box>
      }
    </Flex>
 );
};

const styles = {

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  list: {

  }
};

export default NewsSection;