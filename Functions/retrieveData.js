import AsyncStorage from '@react-native-async-storage/async-storage';

retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log("if")
        
        return value
        
      }
      else{
    console.log("else")
    return "0"
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  
export default retrieveData;