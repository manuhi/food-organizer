/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getWeekList, setWeekday, getFood } from '../../service/data';
import { Card, Title, Paragraph, useTheme } from 'react-native-paper';

const displayFoodNameAndImage = (item) => {
  if (item.foodId != null) {
    const food = getFood(item.foodId);
    return (
      <>
        <Image style={styles.logo} source={{uri: food.image}} />
        <Text style={styles.weeklistTitle}>{food.name}</Text>
      </>
    );
  } else {
    return <Text style={styles.weeklistTitleNA}>Kein Gericht geplant</Text>;
  }
};

const WeekList = ({ route, navigation }) => {
  const theme = useTheme();
  const {refresh} = route.params || true;
  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.listContainer}>
        <FlatList
          data={getWeekList()}
          renderItem={({ item }) => (
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={(props) => <Icon {...props} icon="folder" />}
              right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
            />
            // <View style={styles.itemContainer}>
            //   <Text style={{color: 'white'}}>{item.weekday}</Text>
            //   <View style={styles.itemView}>
            //     {displayFoodNameAndImage(item)}
            //     <TouchableOpacity
            //       onPress={() =>
            //         navigation.navigate('Gericht suchen', {
            //           weekday: item.weekday,
            //         })
            //       }>
            //       <Ionicons name="pencil" color="white" size={20} />
            //     </TouchableOpacity>
            //     <TouchableOpacity
            //       onPress={() => {
            //         setWeekday(item.weekday, null);
            //         navigation.navigate('Wochenplan', {refresh: true});
            //       }}
            //       style={{marginLeft: 5}}>
            //       <Ionicons name="trash" color="white" size={20} />
            //     </TouchableOpacity>
            //   </View>
            // </View>
          )}
          keyExtractor={(item) => item.id}
          extraData={refresh}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 6,
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  weeklistTitle: {
    fontSize: 18,
    width: 250,
    marginLeft: 5,
  },
  weeklistTitleNA: {
    fontSize: 12,
    width: 250,
    marginRight: 45,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
    marginTop: 5,
  },
});

export default WeekList;
