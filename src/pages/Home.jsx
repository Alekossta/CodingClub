import { Box, Typography, Button, Divider } from "@mui/material"
import HomeSection from "../components/HomeSection"
import { Link } from "react-router-dom"

export default function Home()
{
    return <Box sx={{textAlign: "center", display:"flex", flexDirection: "column"}}>
        <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
                height: "45vh",
                width: "45vh",
                marginY: "1vh",
                alignSelf: "center"
            }}
        />

        <Typography             
            sx={{  
                width: { xs: '100%', md: '75%' },
                textAlign: "center",
                alignContent: "center",
                alignSelf: "center",
                marginY: "1vh",
                paddingX: "1rem",
                fontSize: {md: "1.6em", xs: "1.1em"}
            }}>
            Καλώς ήρθες στο Coding Club - μια δυναμική κοινότητα φοιτητών που μοιράζονται το πάθος τους για την τεχνολογία και τον προγραμματισμό!
        </Typography>
        <Typography             
            sx={{  
                width: { xs: '100%', md: '75%' },
                textAlign: "center",
                alignContent: "center",
                alignSelf: "center",
                paddingX: "1rem",
                fontSize: {md: "1.6em", xs: "1.1em"},
                color: "secondary.main",
                fontWeight: "bold",
            }}>
            200+ ΜΕΛΟΙ
        </Typography>
        <Button variant="contained" color="secondary" href="https://discord.gg/c34X34X6Jb" target="_blank" sx={{width: {md: "15%", xs: "70%"}, height: "3.5rem", alignSelf: "center", fontSize: "2em", marginY: "2rem",}}>
            ΜΠΕΣ
        </Button>
        <Divider sx={{width: "80%", alignSelf: "center", marginY: "3rem"}}/>
        <HomeSection imageName={"./eh-logo.png"} title="Ethical Hacking" link={"/ethicalhacking"}
        description={"Βουτήξτε στον κόσμο της ασφάλειας πληροφοριακών συστημάτων και μάθετε πώς να εντοπίζετε και να διορθώνετε ευπάθειες."}/>
        <Divider sx={{width: "80%", alignSelf: "center", marginY: "3rem"}}/>
        <HomeSection isReverse imageName={"./gd-logo.png"} title="Game Development" link={"/gamedev"}
        description={"Εξερευνήστε τη δημιουργία παιχνιδιών από το μηδέν! Από την ανάπτυξη ιστοριών και σχεδιασμού μέχρι την κωδικοποίηση και την κυκλοφορία."}/>
        <Divider sx={{width: "80%", alignSelf: "center", marginY: "3rem"}}/>
        <HomeSection imageName={"./h-logo.png"} title="Hackathons"  link={"/hackathons"}
        description={"Λάβετε μέρος σε δημιουργικά hackathons, λύνοντας πραγματικά προβλήματα, μαθαίνοντας νέα εργαλεία και συναγωνιζόμενοι με άλλες ομάδες."}/>
        <Divider sx={{width: "80%", alignSelf: "center", marginY: "3rem"}}/>
        <HomeSection isReverse imageName={"./cp-logo.png"} title="Competitive Programming" link={"/competitiveprogramming"}
        description={"Βελτιώστε τις δεξιότητές σας στον προγραμματισμό μέσα από απαιτητικές ασκήσεις, αλγοριθμικά challenges και διαγωνισμούς."}/>
        <Divider sx={{width: "80%", alignSelf: "center", marginY: "3rem"}}/>
        <HomeSection imageName={"./os-logo.png"} title="Open Source" link={"/opensource"}
        description={"Μάθετε πώς να συνεισφέρετε σε open source projects, να συνεργάζεστε με developers παγκοσμίως και να φτιάχνετε λογισμικό που κάνει τη διαφορά."}/>
        <Divider sx={{width: "80%", alignSelf: "center", marginY: "3rem"}}/>
        <Typography variant="h2" component={"h2"}>
            Ενδιαφέρεσαι?
        </Typography>
        <Button variant="contained" color="secondary" href="https://discord.gg/c34X34X6Jb" target="_blank" sx={{width: {md: "15%", xs: "70%"}, height: "3.5rem", alignSelf: "center",marginTop: "2rem",}}>
            Μπές
        </Button>
        <Button
                component={Link}
                to={"/meetings"}
                variant="outlined" color="secondary" sx={{width: {md: "15%", xs: "70%"}, height: "3.5rem", alignSelf: "center", marginTop: "1rem",}}>
                Δες τα Meetings
            </Button>
        <Typography marginTop={"2rem"}>Επικοινώνησε στο codingclub@di.uoa.gr</Typography> 
    </Box>
}