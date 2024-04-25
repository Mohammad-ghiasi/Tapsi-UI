import Drivers from "@/components/drivers/Drivers";
import Hero from "@/components/heroBox/Hero";
import Info from "@/components/info/Info";
import Main from "@/components/main/Main";
import TapsiTabs from "@/components/tabs/Tabs";
import Weblogs from "@/components/weblog/Weblogs";
import { Box } from "@mui/material";


export default function Home() {
  return (
    <Box className="mt-[40px]">
      <Hero />
      <TapsiTabs />
      <Main />
      <Info />
      <Drivers />
      <Weblogs />
    </Box>
  );


}
