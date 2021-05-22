import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';

import SubCategoryCard from './SubCategoryCard'

var { width } = Dimensions.get("window");

const SubCategoryList = (props) => {
    const { item } = props;
    return(
        <TouchableOpacity 
        style={{ width: '50%' }}
        onPress={() => 
            props.navigation.navigate("SubCategoryProductList", { item: item.Subcategory_id})
        }
        >
            <View style={{ width: width / 2, 
                backgroundColor: 'gainsboro'}}
        >
            <SubCategoryCard {...item} />
            </View>
        </TouchableOpacity>
    )
}

export default SubCategoryList;