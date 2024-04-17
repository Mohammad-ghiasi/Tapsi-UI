import Hero from "@/components/heroBox/Hero";
import TapsiTabs from "@/components/tabs/Tabs";
import { Box } from "@mui/material";


export default function Home() {
  return (
    <Box className="mt-[40px]">
     <Hero />
     <TapsiTabs />
      
    </Box>
  );


}
