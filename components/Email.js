import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from "react-native";

export default function Email ({ route }) {
    const { id } = route.params;

    const [email, setEmail] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch(
                "https://mobile.ect.ufrn.br:3002/emails/" + id
            );

            const email = await response.json();
            setEmail(email);
        }

        getData();
    }, []);

    return (
        <View>
            <Text>{email.id}</Text>
            <Text>{email.title}</Text>
            <Text>{email.to}</Text>
            <Text>{email.from}</Text>
            <Text>{email.time}</Text>
            <Text>{email.star}</Text>
            <Text>{email.body}</Text>
            <Text>{email.picture}</Text>
        </View>
    )
}
