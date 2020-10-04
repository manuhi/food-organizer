/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
} from 'react-native';
import { Searchbar, Text, Title, useTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {filterFoodList, setWeekday} from '../../service/data';

const SearchFoodScreen = ({route, navigation}) => {
  const [foodList, setFoodList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const {weekday} = route.params;
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.outer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onIconPress={() => {setFoodList(filterFoodList(searchQuery))}}
          style={{margin: 5}}
        />
        <Title theme={theme.colors.primary} style={{textAlign: 'center'}}>{weekday}</Title>
          <FlatList
            data={foodList}
            renderItem={({item}) => {
              const color = item.id === selectedId ? theme.colors.text : theme.colors.accent;
              return (
                <View style={styles.searchContainer}>
                  <Text>{item.name}</Text>
                </View>
                // <TouchableWithoutFeedback
                // onPress={() => setSelectedId(item.id)}>
                //   <View style={styles.item}>
                //     <Text style={{color: color, textAlign: 'center'}}>
                //       {item.name}
                //     </Text>
                //   </View>
                // </TouchableWithoutFeedback>
              );
            }}
            />
            {/* 
        </View>
        <View style={styles.searchButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Wochenplan')}>
            <Text style={{color: 'white'}}>Zurück</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setWeekday(weekday, {selectedId}.selectedId);
              navigation.navigate('Wochenplan', {refresh: true});
            }}>
            <Text style={{color: 'white'}}>Speichern</Text>
          </TouchableOpacity>
        </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  searchContainer: {
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    padding: 5,
  },
  // searchListContainer: {
  //   flexDirection: 'column',
  // },
  // searchList: {
  //   alignItems: 'center',
  // },
  // searchTitle: {
  //   fontSize: 24,
  //   color: 'orange',
  //   marginTop: 10,
  // },
  // searchButtonContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   margin: 15,
  //   paddingTop: 40,
  // },
});

export default SearchFoodScreen;
