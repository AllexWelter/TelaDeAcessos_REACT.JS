import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";
import { Section } from "./components/Section";
import "./styles.css";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },

  {   
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg", 
    alt: "Imagem do jogo Valorant",
  },

    {  
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
    
    { 
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
  
]

const channelLisData = [

    {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png", 
    alt: "Imagem de Mayk Brito",
    },
    
    {
    url: "https://www.twitch.tv/welterallex",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/b51cf75b-4ccd-4b07-a2f7-5b35543e33e5-profile_image-150x150.png",
    alt: "Imagem de AllexWelter",
    },

]

const socialListData = [

  {
    url: "https://www.instagram.com/allex_welter/", 
    imageUrl: "/assests/instagram.svg", 
    alt: "Instagram do AllexWelter", 
  },

  {
    url: "https://www.twitch.tv/welterallex/", 
    imageUrl: "/assests/twitch.svg", 
    alt: "Twitch do AllexWelter", 
  },

  {
    url: "https://x.com/welterzinho/", 
    imageUrl: "/assests/twitter.svg", 
    alt: "Twitter do AllexWelter", 
  },

  {
    url: "https://www.youtube.com/@allexwelter3405/", 
    imageUrl: "/assests/youtube.svg", 
    alt: "Youtube do AllexWelter", 
  },
  
]

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section 
        title="Meu Jogos" 
        subtitle="Os games que eu mais curto jogar!"
        className="games-list"
        >

        {
          gamesListData.map(function(item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })
        }
      </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >

        {
          channelLisData.map(function(item) {
            return (
              <ListItem
                url= {item.url}
                imageUrl= {item.imageUrl}
                alt= {item.alt}
              />
            )
          })
        }
        </Section> 

        <Section
        title="Minhas Redes"
        subtitle="Se conecte comigo agora mesmo!"
        className="social-list"
        >

         {
          socialListData.map(function(item){
            return(
              <ListItem
              url= {item.url}
              imageUrl= {item.imageUrl}
              alt={item.alt}
              />
            )
          })

         } 
        
        </Section>  

      </main>
    </div>
  );
}
