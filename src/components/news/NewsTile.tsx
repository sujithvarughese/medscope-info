import {Anchor, Box, Image, Paper, Text} from "@mantine/core";

type NewsTileProps = {
  source: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  date: string,
}

const NewsTile = ({ source, title, description, url, urlToImage, date }: NewsTileProps) => {

  const monthString = ["January", "February","March","April","May","June","July","August","September","October","November", "December"]
  const month = Number(date.substring(5, 7))
  const day = date.substring(8, 10)
  const year = date.substring(0,4)

  return (
    <Paper style={styles.container}>
      <Image style={styles.image} src={urlToImage} alt="news-cover"/>
      <Box style={styles.textContainer} >
        <Anchor href={url} style={styles.title}>{title}</Anchor>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.source}>{source}</Text>
        <Text style={styles.date}>{monthString[month - 1]} {day}, {year}</Text>
      </Box>
    </Paper>

 );
};

const styles = {
  container: {
    marginRight: 12,
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
  },

  image: {
    height: 120,
  },
  textContainer: {
    flex: 1,
    padding: 6,
    gap: 3,
  },
  title: {

    fontWeight: "600",
  },
  description: {

  },
  source: {
    fontSize: 13,
  },
  touchable: {

  },
  date: {
    fontSize: 12,
    fontStyle: "italic",
    color: "gray"
  }
};

export default NewsTile;