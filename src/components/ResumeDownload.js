import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const ResumeDownload = () => {
  return (
    <Tooltip title="Download Resume">
     <IconButton
        href="/SREEKANTH_J_FullStack_Developer_Resume.pdf" // Put your actual resume file path here
        download
        color="primary"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
          backgroundColor: "white",
          boxShadow: 3,
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
      <DownloadIcon fontSize="large" />
    </IconButton>
  </Tooltip>
  );
};

export default ResumeDownload;
