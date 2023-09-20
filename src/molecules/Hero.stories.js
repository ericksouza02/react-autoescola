import Hero from "./Hero";
import Heading from "../atoms/Heading";
import Button from '../atoms/Button'
import CardImage from '../assets/card-image-story.jpg'
export default {
    title: 'Components/Organisms/Hero',
    component: Hero
}

export const usage = () => (

    <Hero image={CardImage}>
        <Heading>
            <h1>
                Ganhe sua <strong>liberdade</strong><br /> para ir e vir
            </h1>
        </Heading>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ipsam!</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, reprehenderit!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sit.</li>
        </ul>
        <Button color='primary' variant='outlined'>Matricule-se Agora</Button>
    </Hero>
)