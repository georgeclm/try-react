import React from 'react';
import { StyleSheet,Platform, StatusBar, Image } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Block, GalioProvider } from 'galio-framework';
import { Images, products, materialTheme } from './constants/';
import { NavigationContainer } from '@react-navigation/native';

enableScreens();
const assetImages = [
  Images.Pro,
  Images.Profile,
  Images.Avatar,
  Images.Onboarding,
];
products.map(product => assetImages.push(product.image));
function cacheImages(images) {
  return images.map(image => {
      return Image.prefetch(image);
  });
}

export default class App extends React.Component {

   render() {

      return (
        <NavigationContainer>
          <GalioProvider theme={materialTheme}>
            <Block flex>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <Screens />
            </Block>
          </GalioProvider>
        </NavigationContainer>

      //   <View style={styles.container}>
      //   <TouchableOpacity
      //    style={styles.button}
      //    onPress={this.onPress}
      //   >
      //    <Text>Click me</Text>
      //   </TouchableOpacity>
      //   <View>
      //     <Text>
      //       You clicked { this.state.count } times
      //     </Text>
      //   </View>
      // </View>
      );
   }
   _loadResourcesAsync = async () => {
    return Promise.all([
      ...cacheImages(assetImages),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // This is for d-flex
    // flexDirection: 'row',
    flex: 1,
    // Center of the screen horizontally
    justifyContent: 'center',
    // Top of the screen 
    // justifyContent: 'flex-start',
    // Bottom of the screen 
    // justifyContent: 'flex-end',
    // Equally Space top and bottom for content
    // justifyContent: 'space-around',
    // Top and Bottom Content
    // justifyContent: 'space-between',
    // Center vertically
    alignItems: 'center',
    // Align Left vertically
    // alignItems: 'flex-start',
    // Align RIght Vertically
    // alignItems: 'flex-end',
    // alignItems: 'stretch'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})