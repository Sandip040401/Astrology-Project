

import AstrologyComponent from "../components/AstrologyComponent ";
import AstrologyComponent2 from "../components/AstrologyComponent2";
import AstrologyExperience from "../components/AstrologyExperience ";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ZodiacForm from "../components/ZodiacForm";
import ZodiacSign from "../components/ZodiacSign";

export default function Home(){
    return(
        <>
            <Navbar/>
            <AstrologyComponent/>
            <AstrologyComponent2/>
            <ZodiacSign/>
            <AstrologyExperience/>
            <ZodiacForm/>
            <Footer/>
        </>
    )
}