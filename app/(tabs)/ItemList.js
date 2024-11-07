import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import { observer } from 'mobx-react-lite';
import itemStore from './ItemStore';

const ItemList = observer(() => {
    useEffect(() => {
        itemStore.getItems();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 20 }}>
                {itemStore.isLoading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <FlatList
                        data={itemStore.items}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ddd' }}>
                                <Text>ID: {item.id}</Text>
                                <Text>Body: {item.body}</Text>
                            </View>
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    );
});

export default ItemList;