import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

const uri = 'https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png'

export function GuildIcon(){
    return(
        <Image
            source={{uri}}
            style={styles.image}
            resizeMode="cover"
        />
    )
}