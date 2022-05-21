import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Row from '../components/Row';
import { Movie } from '../typings';
import Requests from '../utils/Requests';

export const getServerSideProps = async() => {
  const [
    actionMovies,
    comedyMovies,
    documentaries,
    horrorMovies,
    netflixOriginals,
    romanceMovies,
    topRated,
    trendingNow
  ] = await Promise.all([
    fetch(Requests.fetchActionMovies).then((res) => res.json()),
    fetch(Requests.fetchComedyMovies).then((res) => res.json()),
    fetch(Requests.fetchDocumentaries).then((res) => res.json()),
    fetch(Requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(Requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(Requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(Requests.fetchTopRated).then((res) => res.json()),
    fetch(Requests.fetchTrending).then((res) => res.json())
  ])

  return {
    props: {
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      documentaries: documentaries.results,
      horrorMovies: horrorMovies.results,
      netflixOriginals: netflixOriginals.results,
      romanceMovies: romanceMovies.results,
      topRated: topRated.results,
      trendingNow: trendingNow.results
    }
  }
}

interface Props {
  actionMovies: Movie[];
  comedyMovies: Movie[];
  documentaries: Movie[];
  horrorMovies: Movie[];
  netflixOriginals: Movie[];
  romanceMovies: Movie[];
  topRated: Movie[];
  trendingNow: Movie[];
  // products: Product[];
}

const Home: NextPage<Props> = (props) => {
  
  // console.log(props.comedyMovies);
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16"> 
        <Banner netflixOriginals={props.netflixOriginals}/>
        <section className="md:space-y-24 ">
          <Row title="Trending Now" movies={props.trendingNow} />
          <Row title="Top Rated" movies={props.topRated} />
          <Row title="Action Thrillers" movies={props.actionMovies} />
          <Row title="Comedies" movies={props.comedyMovies} />
          <Row title="Scary Movies" movies={props.horrorMovies} />
          <Row title="Romance Movies" movies={props.romanceMovies} />
          <Row title="Documentaries" movies={props.documentaries} />
        </section>
      </main>
    </div>
  )
}

export default Home;
