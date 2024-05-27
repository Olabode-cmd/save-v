import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import { IconChevronDown } from '@tabler/icons-react'
import CloseIcon from "@mui/icons-material/Close";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  marginTop: theme.spacing(5), // Adjust the top margin as needed
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius, // For rounded borders
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  outline: "none",
  width: 400, // Adjust the width as needed
  border: "none", // No border color
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

const notifications = [
  {
    id: 1,
    title: "Notification 1",
    body: "This is the body of notification 1",
  },
  {
    id: 2,
    title: "Notification 2",
    body: "This is the body of notification 2",
  },
  {
    id: 3,
    title: "Notification 3",
    body: "This is the body of notification 3",
  },
];

const CustomModal = ({ open, onClose }) => (
  <StyledModal
    open={open}
    onClose={onClose}
    aria-labelledby="custom-modal-title"
    aria-describedby="custom-modal-description"
  >
    <ModalContent>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      <Typography id="custom-modal-title" variant="h5" component="h2" sx={{paddingLeft: "10px"}}>
        Notifications
      </Typography>
      <Typography id="custom-modal-description" sx={{ mt: 2 }}>
        <List>
          {notifications.map((notification) => (
            <ListItem key={notification.id} sx={{ width: "100%" }}>
              <Accordion sx={{ width: "100%" }}>
                <AccordionSummary expandIcon={<IconChevronDown />}>
                  <Typography>{notification.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{notification.body}</Typography>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          ))}
        </List>
      </Typography>
    </ModalContent>
  </StyledModal>
);

export default CustomModal;
