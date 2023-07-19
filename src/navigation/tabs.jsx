import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const TabsNavigator  = () => {
    return(
        <BottomTab.Navigator initialRouteName="ShopTab">
            <BottomTab.Screen name="ShopTab" component={ShopNavigator}/>
            <BottomTab.Screen name="Cart" component={CartNavigator}/>
            <BottomTab.Screen name="Orders" component={OrdersNavigator}/>
        </BottomTab.Navigator>
    );
}