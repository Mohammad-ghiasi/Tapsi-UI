import { Box, Button, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AppsIcon from '@mui/icons-material/Apps';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import SportsMotorsportsOutlinedIcon from '@mui/icons-material/SportsMotorsportsOutlined';

export default function Home() {
  return (
    <Box className="mt-[40px]">
      <Box className="flex flex-row justify-center w-100 h-[600px] md:h-[500px]  bg-hero-pattern bg-center bg-no-repeat bg-cover">
        <Box className="w-[100%] md:w-[50%]   flex justify-center ">
          <Box className="px-9 text-white bg-black-rgba my-auto py-6 w-[90%] rounded-3xl">
            <Typography variant="h3">تپسی</Typography>
            <Typography variant="body1" className="font-bold text-xl md:text-2xl mt-4">اپلیکیشن درخواست خودرو و پیک</Typography>
            <Box className="w-[100%] flex justify-center flex-col items-center">
              <Box className=" w-[100%] grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-8">
                <Button startIcon={<ArrowDownwardIcon style={{ fontSize: "25px", marginLeft: "15px" }} />} variant="contained" sx={{
                  background: "white", color: "black", paddingY: "12px", fontWeight: 'bold', borderRadius: '8px', fontSize: '16px'
                }} color="inherit" fullWidth>دانلود اپلیکیشن مسافران</Button>

                <Button startIcon={<AppsIcon style={{ fontSize: "25px", marginLeft: "15px" }} />} variant="contained" sx={{
                  background: "white", color: "black", paddingY: "12px", fontWeight: 'bold', borderRadius: '8px', fontSize: '16px'
                }} color="inherit" fullWidth>وب اپلیکیشن مسافران</Button>

                <Button variant="contained"
                  startIcon={<DirectionsCarFilledOutlinedIcon style={{ fontSize: "25px", marginLeft: "15px" }} />}
                  sx={{
                    border: '2px solid white', // Adjust border properties as needed
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    paddingY: "12px",
                    fontSize: '16px', // Add border radius for rounded corners if desired
                    '&:hover': {
                      background: 'rgba(0, 0, 0, 0.6)', // Adjust hover border color if needed
                    },
                  }} className="bg-black-rgba" fullWidth>ثبت نام راننده خودرو</Button>

                <Button variant="contained"
                  startIcon={<SportsMotorsportsOutlinedIcon style={{ fontSize: "25px", marginLeft: "15px" }} />}
                  sx={{
                    border: '2px solid white', // Adjust border properties as needed
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    paddingY: "12px",
                    fontSize: '16px', // Add border radius for rounded corners if desired
                    '&:hover': {
                      background: 'rgba(0, 0, 0, 0.6)', // Adjust hover border color if needed
                    },
                  }} className="bg-black-rgba" fullWidth>ثبت نام راننده موتود</Button>

              </Box>
              <Box className="w-[100%] md:w-[50%]">
                <Button variant="contained"
                  startIcon={<ArrowDownwardIcon style={{ fontSize: "25px", marginLeft: "15px" }} />} // Increase the font size of the icon
                  sx={{
                    border: '2px solid white',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    '&:hover': {
                      background: 'rgba(0, 0, 0, 0.6)',
                    },
                  }}
                  className="bg-black-rgba mt-[16px] py-3"
                  fullWidth
                >
                  دانلود اپلیکیشن مسافران
                </Button>

              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="w-[50%] hidden md:block">
          <Typography variant="h3">mohammad ghiasi</Typography>
        </Box>
      </Box>
      <h1>سلام من , محمد قیاسی هستم</h1>
      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem voluptatum odio blanditiis voluptate iure sequi! A veniam totam, perferendis est fugiat iste nulla commodi, velit minima dolore nisi assumenda eum.
        Tempore quibusdam consequatur hic vero repellendus dicta aliquid voluptatem porro, quos laboriosam optio odio, animi vitae ad nisi inventore asperiores rerum quas temporibus molestiae. Pariatur velit voluptatum itaque. Dolorum, eligendi!
        Dolorum error, eum facere magnam molestias rerum, dolores labore odit illum voluptatem sint in, blanditiis omnis dicta? Harum, aut placeat? Praesentium a voluptas nam illum officia doloribus quo reprehenderit exercitationem?
        Quibusdam omnis fugiat nihil, ab voluptas labore quasi! Architecto in accusantium est totam voluptatum, tenetur praesentium quas excepturi animi dolore nesciunt assumenda enim? Architecto voluptatum nesciunt recusandae, nemo delectus qui.
        Sit inventore possimus quae iure officiis praesentium. Eum harum ab itaque. Maxime numquam, nam amet debitis possimus molestias illo nulla, natus, consequatur iure dolorem esse architecto ea! Fuga, sunt quasi.
        Rerum, quidem officiis quaerat maxime saepe illo? A itaque nesciunt error quo assumenda sequi, explicabo nobis. Numquam at quis aperiam quod ea corrupti, consectetur libero repudiandae, laudantium quaerat officia quisquam!
        Quas ab fuga quis, iure pariatur, illum vitae accusantium laboriosam eius iste qui at, nisi iusto quam doloremque? Iusto pariatur commodi cum. Et itaque voluptas aut minima nisi error non?
        Facilis mollitia nisi, exercitationem expedita, nam deserunt qui sint sapiente odio velit, assumenda eveniet ducimus distinctio laboriosam eius ea facere esse reprehenderit recusandae totam commodi minima consequuntur? In, cum voluptas!
        Fugit provident aperiam eos commodi dolore qui delectus laboriosam illum est quaerat deserunt cupiditate dolorum, vitae esse iure culpa libero recusandae soluta a voluptas repellendus! Quod corporis eaque deleniti dolorum!
        Consequatur eligendi itaque deleniti, delectus, quasi praesentium minus pariatur natus nemo illum mollitia id blanditiis ab laboriosam numquam tenetur corporis laudantium ad sequi magni. Doloribus soluta quaerat ipsa autem non?
        Ex repellat quam beatae dolor id unde perspiciatis odio quisquam. Odit voluptates qui ducimus ipsam tenetur laborum cum rerum totam error, iste ipsum dignissimos molestiae facilis assumenda, ut quidem eveniet!
        Obcaecati vel reprehenderit molestias aut ipsa quas nam. Laborum, perferendis saepe. Ullam eaque sunt, ab accusantium optio dolorem mollitia corrupti assumenda harum voluptas unde illum nisi reprehenderit similique tempora maiores?
        Officia blanditiis itaque rem doloremque aliquam perferendis, a, hic dignissimos, eum in vitae culpa porro laborum nostrum? Nisi, cum ipsa. Repellat perspiciatis impedit dolore libero ex sed ipsam, molestiae dolorum.
        Facilis enim deleniti nulla cum hic culpa, numquam aspernatur quas obcaecati maxime saepe doloribus perspiciatis, repellendus sint ex neque cumque. Optio libero ullam officiis id, accusamus maxime facilis. Optio, sequi?
        Voluptas voluptatibus accusantium quis hic ipsam temporibus repellat, necessitatibus pariatur eum, molestiae libero saepe repudiandae optio quae numquam dicta, quia quasi harum. Ipsum ut alias exercitationem impedit est vel totam!
        Perspiciatis earum ab maiores dolore, doloremque temporibus error nostrum iste vitae accusamus dolorem nam nesciunt doloribus rem cupiditate tempora sed sunt reiciendis? Ipsam minus error ad, illo omnis earum dolor?
        Fugiat similique accusantium velit culpa quod iusto ipsa ipsum deleniti dolor quia quis, omnis natus perferendis provident in consequuntur quasi earum labore dolorem dolorum consequatur minima quam magni. Error, soluta.
        Vero, voluptatum totam. Minus odit facere iusto sed! Blanditiis, officia? Inventore, laborum architecto. Culpa consequuntur iste ab magnam itaque, repudiandae quos quae totam, veniam ipsa nemo, eos voluptas sed minus!
        Quae atque, possimus delectus molestiae officiis consequuntur? Debitis harum at a ratione. Laboriosam doloribus minima suscipit debitis illo commodi obcaecati illum cupiditate rerum! Ex rerum fugit ullam. Illo, numquam quis!
        Perspiciatis porro alias necessitatibus non, laborum dicta ut? Dicta iure sit soluta suscipit facere neque libero, perferendis doloremque delectus ipsa, deserunt reiciendis atque reprehenderit qui ea ab nobis blanditiis illo!</h1>
    </Box>
  );


}
