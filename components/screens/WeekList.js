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
import {getWeekList, setWeekday, getFood} from '../../service/data';

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

const WeekList = ({route, navigation}) => {
  const {refresh} = route.params || true;
  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.listContainer}>
        <FlatList
          data={getWeekList()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.weekday}>{item.weekday}</Text>
              <View style={styles.itemView}>
                {displayFoodNameAndImage(item)}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Gericht suchen', {
                      weekday: item.weekday,
                    })
                  }>
                  <Ionicons name="pencil" color="white" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setWeekday(item.weekday, null);
                    navigation.navigate('Wochenplan', {refresh: true});
                  }}>
                  <Ionicons name="trash" color="white" size={20} />
                </TouchableOpacity>
              </View>
            </View>
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
    backgroundColor: '#2b2b2b',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#4b4b4b',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  weekday: {
    color: 'white',
  },
  weeklistTitle: {
    fontSize: 18,
    color: 'orange',
    width: 250,
  },
  weeklistTitleNA: {
    fontSize: 12,
    color: '#FFCC99',
    width: 250,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
    marginTop: 5,
  },
});

export default WeekList;
