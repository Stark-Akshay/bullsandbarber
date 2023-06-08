import { Button } from "@mui/material";

const Notif = () => {

    const showNotification = () => {
        // create a new notification
        const notification = new Notification('JavaScript Notification API', {
            body: 'This is a JavaScript Notification API demo',
        });
    }

    return(
        <Button onClick={showNotification}>Click</Button>
    );


}

export default Notif;