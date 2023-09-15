import Hero from "./Hero";
import CardImage from '../assets/card-image-story.jpg'
export default {
    title: 'Components/Organisms/Hero',
    component: Hero
}

export const usage = () => (

    <Hero image={CardImage} title='Ganhe sua liberdade para ir e vir'>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ipsam!</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, reprehenderit!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sit.</li>
        </ul>
        <button>Clique aqui</button>
    </Hero>
)