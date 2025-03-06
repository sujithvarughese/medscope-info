import {Anchor, Box, Image, Text} from "@mantine/core";


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

    <Anchor href={url} style={styles.button}>
      <Box style={styles.container}>
        <Image style={styles.image}  src={urlToImage } alt="news-cover"/>
        <Box style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.source}>{source}</Text>
        </Box>
      </Box>
    </Anchor>

 );
};

const styles = {
  button: {
    backgroundColor: "white",
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
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: 240,
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