import { useFonts } from "expo-font";

const LoadExpoFont = ()=>{
const [loaded] = useFonts({
    RobotoBold : require('../assets/fonts/Roboto-Bold.ttf'),
    RobotoRegular : require('../assets/fonts/Roboto-Regular.ttf'),
    LatoRegular : require('../assets/fonts/Lato-Regular.ttf'),
    LatoBold : require('../assets/fonts/Lato-Bold.ttf'),
});

if(!loaded){
    return null;
}

}

export default LoadExpoFont;