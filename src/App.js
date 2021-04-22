import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider,InMemoryCache} from '@apollo/react-hooks'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-weather-api.herokuapp.com/'
  })
  
  return (
    <ApolloProvider client={client}>
      <main>
      <div className='container'>
        <Header/>
        <Home/>
      </div>
      <Footer/>
      </main>
      
     

    </ApolloProvider>


  )
}

export default App
