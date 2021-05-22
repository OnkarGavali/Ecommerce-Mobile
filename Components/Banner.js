import React, { useState,useCallback, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";

import axios from 'axios';
import { COLORS, SIZES,appConstants,images } from "../Constants";
var { width } = Dimensions.get("window");
import { useFocusEffect } from '@react-navigation/native'
const Banner= (props) => {
  const [bannerData, setBannerData] = useState([]);
  const [bannerData2, setBannerData2] = useState([]);
  const [bannerCount, setBannerCount] = useState(0);


  useFocusEffect((
    useCallback(
      () => {
    setBannerData([
      "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
      "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
      "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
    ]);

    axios
          .get(`${appConstants.ClientUrL}banners`)
          .then((res) => {
            console.log("hi banners")
            console.log(res.data)
            
            setBannerData2(res.data.banners);
            setBannerCount(res.data.bannersCount);
          
          })
          .catch((error) => {
            console.log('Api call error1',error)
          })

    return () => {
      setBannerData([]);
    };
  },
  [],
)
))

  return (
    <ScrollView>
    { bannerCount > 0 ?
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerData2.map((item) => {
             
              return (
                <Image
                  key={item.Banner_id}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  
                  source={{uri: 
                appConstants.ImageUrl+ item.Banner_Image_Path 
                }}
            
                />
                
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View> :
      null
      }






     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;
