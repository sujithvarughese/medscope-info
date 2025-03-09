import {Anchor, Box, Image, Paper, Text} from "@mantine/core";
import defaultImage from "../../assets/news-default.png"

type FeaturedArticleProps = {
  source: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  date: string,
}

const FeaturedArticle = ({ source, title, url, description, urlToImage }: FeaturedArticleProps) => {
  return (

    <Paper style={styles.container}>
      <Box style={styles.container}>
        <Image style={styles.image}  src={urlToImage } fallbackSrc={defaultImage} alt="news-cover"/>
        <Box style={styles.textContainer}>
          <Anchor href={url} style={styles.title}>{title}</Anchor>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.source}>{source}</Text>
        </Box>
      </Box>
    </Paper>

 );
};

const styles = {
  container: {
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 8,
  },
 title: {
    fontSize: 16,
    fontWeight: "800",
  },
  description: {

  },
  source: {
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "italic",
  }
};

export default FeaturedArticle;