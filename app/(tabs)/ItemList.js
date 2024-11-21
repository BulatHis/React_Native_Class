import React, { useEffect } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Button,
    ScrollView,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import itemStore from './ItemStore';

const ItemList = observer(() => {
    useEffect(() => {
        itemStore.getItems();
        itemStore.getLocalItems();
    }, []);

    const saveItemLocally = (item) => {
        itemStore.saveItemLocally(item);
    };

    const deleteAllLocalItems = () => {
        itemStore.localItems.forEach((item) => itemStore.deleteLocalItem(item.id));
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>API Items</Text>
                {itemStore.isLoading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <FlatList
                        data={itemStore.items}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    padding: 10,
                                    borderBottomWidth: 1,
                                    borderColor: '#ddd',
                                }}
                            >
                                <Text>ID: {item.id}</Text>
                                <Text>Body: {item.body}</Text>
                                <Button
                                    title="Save Locally"
                                    onPress={() => saveItemLocally(item)}
                                />
                            </View>
                        )}
                    />
                )}

                <Button
                    title="Delete All Local Items"
                    onPress={deleteAllLocalItems}
                    color="red"
                    style={{ marginTop: 20 }}
                />

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>
                    Local Items
                </Text>
                <FlatList
                    data={itemStore.localItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                padding: 10,
                                borderBottomWidth: 1,
                                borderColor: '#ddd',
                            }}
                        >
                            <Text>ID: {item.id}</Text>
                            <Text>Body: {item.body}</Text>
                        </View>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
});

export default ItemList;