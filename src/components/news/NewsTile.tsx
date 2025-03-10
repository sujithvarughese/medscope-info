import {Anchor, Box, Image, Paper, Text} from "@mantine/core";
import defaultImage from "../../assets/news-default.png"

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
    <Paper style={{ boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)", borderRadius: 10}}>
      <Image src={urlToImage} fallbackSrc={defaultImage} alt="news-cover" height={160} style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}/>
      <Box p="xs">
        <Anchor href={url} style={{ fontWeight: 700 }} lineClamp={2}>{title}</Anchor>
        <Text lineClamp={3}>{description}</Text>
        <Text style={{ fontSize: 14, fontWeight: 600 }}>{source}</Text>
        <Text style={{ fontSize: 14, fontStyle: "italic", color: "gray" }}>{monthString[month - 1]} {day}, {year}</Text>
      </Box>
    </Paper>

 );
};

export default NewsTile;