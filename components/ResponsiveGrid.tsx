// src/components/ResponsiveGrid.tsx
import { Image } from "expo-image";
import React from "react";
import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";
import { dIsTablet } from "../constants/contanst"; // tu detector de tablet
interface Item {
  id: number;
  img: string;
  title?: string;
  // otros campos...
}

export function ResponsiveGrid({ data }: { data: Item[] }) {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const isTablet = dIsTablet;

  // decide columnas según dispositivo + orientación
  const numColumns = React.useMemo(() => {
    if (isTablet && isLandscape) return 6;
    if (isTablet) return 4;
    if (!isTablet && isLandscape) return 3;
    return 2;
  }, [isTablet, isLandscape]);

  // tamaño de cada item
  const itemSize = width / numColumns;

  return (
    <FlatList
      data={data}
      key={numColumns} // fuerza re-render si cambian columnas
      numColumns={numColumns}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={[styles.card, { width: itemSize, height: itemSize }]}>
          <Image
            source={{ uri: item.img }}
            style={{ flex: 1, aspectRatio: 1 }}
            resizeMode="cover"
          />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    // opcional: padding, spacing, etc
  },
  card: {
    padding: 4,
  },
});
