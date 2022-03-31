import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import InputScreen from './src/screen/InputScreen/InputScreen'

const navigator = createStackNavigator(
  {
    Input: InputScreen,
  },
  {
    initialRouteName: 'Input',
  }
)

export default createAppContainer(navigator)
