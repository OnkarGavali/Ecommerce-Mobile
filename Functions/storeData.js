import AsyncStorage from '@react-native-async-storage/async-storage';

storeData = async (key,value) => {
    try {
        await AsyncStorage.setItem(
            key,
            value
          );
          console.log("done")
          return 200
    } catch (error) {
      alert(error)
    }
  };
  
export default storeData;