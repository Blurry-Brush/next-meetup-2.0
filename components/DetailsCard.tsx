import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EmailIcon from "@mui/icons-material/Email";
import { Data } from "../typings";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface Props {
  meetup: Data;
}

const randomColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "orange",
  "purple",
  "brown",
  "grey",
  "black",
  "white",
];

function DetailsCard({ meetup }: Props) {
  var meetupDate = new Date(meetup.date);

  return (
    <Card sx={{ maxWidth: 500, mx: [5, "auto"], mt: 5, pb: 1 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor:
                randomColors[
                  Math.floor(Math.random() * randomColors.length + 1)
                ],
            }}
          >
            {" "}
            {meetup.creator[0]}{" "}
          </Avatar>
        }
      />

      <CardMedia
        component="img"
        height="194"
        image={meetup.image}
        alt={meetup.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {meetup.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {meetup.description}
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ mt: 2 }}
          spacing={1}
        >
          <Chip icon={<LocationOnIcon />} label={meetup.address} />
          <Chip
            icon={<CalendarTodayIcon sx={{ fontSize: "medium" }} />}
            label={meetupDate.toDateString()}
            variant="outlined"
          />
        </Stack>
      </CardContent>

      <CardActions>
        <Button
          color="error"
          variant="outlined"
          startIcon={<EmailIcon />}
          href={`mailto:${meetup.creator}`}
        >
          Contact Organizer
        </Button>
      </CardActions>
    </Card>
  );
}

export default DetailsCard;
