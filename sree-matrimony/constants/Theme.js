import { Dimensions } from "react-native";
const {width,height} = Dimensions.get('window');


export const SIZES ={
    width,
    padding:10,
    radius:30,
    height,
    //font size
    h1: 30,
    h2: 22,
    h3: 20,
    h4:18,
    body1:30,
    body2:20,
    body3:16,
    body4:14,
    body5:12
}
//#4530b2
//#5450d6

export const COLOURS ={
    lightGrey:'#D3D3D3',
    lightGrey2:'#f7f5f5',
    darkBlue:'#4530b2',
    lightBlue:'#7062e2',
    white:'white'
}

export const FONTS ={
    h1:{fontFamily:'LatoBold',fontSize:SIZES.h1,lineHeight :36 } ,
    h2:{fontFamily:'LatoBold',fontSize:SIZES.h2,lineHeight :30 } ,
    h3:{fontFamily:'LatoBold',fontSize:SIZES.h3,lineHeight :22} ,
    h4:{fontFamily:'LatoBold',fontSize:SIZES.h4,lineHeight :22 } ,
    body1:{fontFamily:'LatoRegular',fontSize:SIZES.body1,lineHeight :36 } ,
    body2:{fontFamily:'LatoRegular',fontSize:SIZES.body2,lineHeight :30 } ,
    body3:{fontFamily:'LatoRegular',fontSize:SIZES.body3,lineHeight :22 } ,
    body4:{fontFamily:'LatoRegular',fontSize:SIZES.body4,lineHeight :22 } ,
    body5:{fontFamily:'LatoRegular',fontSize:SIZES.body5,lineHeight :22 } ,
}