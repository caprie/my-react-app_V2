import React from "react"
import Banner from "../../components/Banner/Banner"
import Container from "../../components/container/Container"
import ApartmentGrid from "../../components/container/ApartmentGrid"
import apartmentsData from "../../Data/data.json" // import données
import "./home.scss"

function Home() {
  return (
    <div>
      <Banner image="/banner_index.png" showText={true} />
      <Container>
        <ApartmentGrid apartments={apartmentsData} />
      </Container>
    </div>
  );
}

export default Home
