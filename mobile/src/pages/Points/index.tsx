import React from "react";
import { View, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { SvgUri } from "react-native-svg";

import styles from "./styles";

//-23.3685874,-48.1896161

const Points: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail() {
    navigation.navigate("Detail");
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Text style={styles.title}>😄 Bem vindo!</Text>
        <Text style={styles.description}>
          Encontre no mapa um ponto de coleta
        </Text>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -23.3685874,
              longitude: -48.1896161,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            <Marker
              coordinate={{ latitude: -23.3685874, longitude: -48.1896161 }}
              onPress={handleNavigateToDetail}
            >
              <View style={styles.mapMarkerContainer}>
                <Image
                  style={styles.mapMarkerImage}
                  source={{
                    uri:
                      "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
                  }}
                />
                <Text style={styles.mapMarkerTitle}>Mercado</Text>
              </View>
            </Marker>
          </MapView>
        </View>
      </View>

      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.0.103:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.0.103:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.0.103:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.0.103:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.0.103:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.0.103:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Points;
