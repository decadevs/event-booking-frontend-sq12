import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
export default function App() {
    return (
        <div style={{}}>
            <Card style={{

                width: 500,
                height: 300,
                backgroundColor: "yellow",
            }}>
                <CardContent>

                    <h2> Payment Type
                    </h2>
                    <p>Select from the options your preferred payment option.
                    </p>
                    <Typography variant="body2" component="p"> Stay Happy
                    </Typography>
                </CardContent>
                <CardActions> <Button size="small">Stay Safe.....</Button> </CardActions>
            </Card>
        </div >);
}