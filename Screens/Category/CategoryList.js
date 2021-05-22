import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';

import CategoryCard from './CategoryCard'

var { width } = Dimensions.get("window");

const CategoryList = (props) => {
    const { item } = props;
    return(
        <TouchableOpacity 
        style={{ width: '50%' }}
        onPress={() => 
            props.navigation.navigate("SubCategory", { item: item.Category_id})
        }
        >
            <View style={{ width: width / 2, 
                backgroundColor: 'gainsboro'}}
        >
            <CategoryCard {...item} />
            </View>
        </TouchableOpacity>
    )
}

export default CategoryList;