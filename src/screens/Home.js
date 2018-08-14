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

    let cotacoes = []
    
    for (c in responseJson.valores) {
      cotacoes.push({
        nome: responseJson.valores[c].nome,
        valor: responseJson.valores[c].valor
      })
    }

    this.setState({
      cotacoes: cotacoes
    })
  }

  render() {
    return (
      <View>
        { this.state.cotacoes
          ? this.state.cotacoes.map((cot, idx) => <Text key={idx}>{cot.nome}: {cot.valor}</Text>)
          : ''
        }
      </View>
    );
  }
}
