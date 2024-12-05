import React, { useEffect } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Button,
    ScrollView,
    Alert,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import itemStore from './ItemStore';
import { Modalize } from 'react-native-modalize';

const ItemList = observer(() => {
    useEffect(() => {
        itemStore.getItems();
        itemStore.getLocalItems();
    }, []);

    const saveItemLocally = (item) => {
        itemStore.saveItemLocally(item);
    };

    const deleteAllLocalItems = () => {
        Alert.alert(
            "Подтверждение",
            "Вы уверены, что хотите удалить все локальные задачи?",
            [
                {
                    text: "Нет",
                    style: "cancel",
                },
                {
                    text: "Да",
                    onPress: () => {
                        itemStore.deleteAllLocalItems(); // Удаляем все задачи
                    },
                },
            ]
        );
    };

    // Удаление задачи с подтверждением через Alert
    const deleteTaskWithConfirmation = (id) => {
        Alert.alert(
            "Подтверждение",
            "Точно удалить задачу?",
            [
                {
                    text: "Нет",
                    style: "cancel",
                },
                {
                    text: "Да",
                    onPress: () => {
                        itemStore.deleteLocalItem(id); // Удаляем задачу по id
                    },
                },
            ]
        );
    };

    // Открытие модального окна с завершенными задачами
    const openCompletedTasks = () => {
        itemStore.getLocalItems(); // Обновляем локальные задачи перед открытием модального окна
        modalRef.current?.open();
    };

    const modalRef = React.useRef(null);

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
                /><Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>
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
                        <Button
                            title="Delete"
                            color="red"
                            onPress={() => deleteTaskWithConfirmation(item.id)}
                        />
                    </View>
                )}
            />

            <Button
                title="Посмотреть завершенные задачи"
                onPress={openCompletedTasks}
                style={{ marginTop: 20 }}
            />
        </ScrollView>

        {/* Модальное окно с завершенными задачами */}
        <Modalize ref={modalRef}>
            <View style={{ padding: 20, backgroundColor: '#fff' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Завершенные задачи
                </Text>
                {itemStore.localItems.filter((task) => task.completed).map((item) => (
                    <View key={item.id} style={{ paddingVertical: 10 }}>
                        <Text>{item.text}</Text>
                    </View>
                ))}
            </View>
        </Modalize>
    </SafeAreaView>
);
});

export default ItemList;