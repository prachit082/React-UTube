import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, SideBar } from "./index";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          <p><a href="https://github.com/prachit082" style={{color: '#fff', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">Copyright © 2025 UTube by Prachit</a></p>
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;