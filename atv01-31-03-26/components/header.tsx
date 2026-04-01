import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export default function Header({
  title = "Meu Header",
  subtitle,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>

      <View style={styles.iconRow}>
        <View style={styles.iconBox}>
          <MaterialIcons name="search" size={22} color="#1f2937" />
        </View>
        <View style={styles.iconBox}>
          <MaterialIcons name="notifications-none" size={22} color="#1f2937" />
        </View>
        <View style={styles.iconBox}>
          <MaterialIcons name="more-vert" size={22} color="#1f2937" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    marginTop: 2,
    fontSize: 13,
    color: "#6b7280",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f4f6",
  },
});
