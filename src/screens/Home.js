import React from 'react'
import { TouchableOpacity, View, FlatList, Text, Image } from 'react-native'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Cotações'
  }
  
  state = {
    cotacoes: null
  }

  async componentDidMount() {
    const res = await fetch('https://api.promasters.net.br/cotacao/v1/valores')
    const responseJson = await res.json()
    console.log(responseJson)
    this.setState({
      cotacoes: responseJson.valores
    })
  }

  montarLista () {
    return Object.keys(this.state.cotacoes)
  }

  render() {
    return (
      <Text>
        Dólar: { this.state.cotacoes ? this.state.cotacoes.USD.valor : '' }
      </Text>
    );
  }
}
