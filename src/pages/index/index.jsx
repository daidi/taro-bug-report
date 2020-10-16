import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  onImageLoad(e) {
    console.log(e)
  }

  render() {
    return (
      <View className='index'>
        <Image src='https://img13.360buyimg.com/img/jfs/t1/19085/37/4620/46003/5c32fe47Ee72a0d3f/15e1247fc66e5c08.png'
               onLoad={this.onImageLoad}></Image>
      </View>
    )
  }
}
