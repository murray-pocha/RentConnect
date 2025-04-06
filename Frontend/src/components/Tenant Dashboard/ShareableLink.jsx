import React from "react";
import { Box } from '@mui/system'
import { Button, Paper, Tooltip } from '@mui/material';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

function ShareableLink() {
  return(
    <>
      <h2>Shareable Link:</h2>
      <Paper sx={{height: '100px'}} className="copy-box">
            <Box sx={{p: '20px'}}>
                RentConnect/my-tenant-page.com
            </Box>
            <Tooltip title="Copy to clipboard">
                <Button sx={{minWidth: '30px'}}>
                    <ContentCopyRoundedIcon sx={{height: '20px', color: '#FFFFF'}}/>
                </Button>
            </Tooltip>
        </Paper>
    </>
  )
}

export default ShareableLink;