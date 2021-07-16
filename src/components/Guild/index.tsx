import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { GuildIcon } from '../GuildIcon';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

export type GuildProps = {
    id: string,
    name: string;
    icon: string | null;
    owner: boolean;

}

type Props = TouchableOpacityProps & {
    data: GuildProps
}

export function Guild({ data, ...rest }: Props) {

    const { secondary50, secondary70 } = theme.colors;
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            {...rest}
        >
            <LinearGradient
                style={styles.guildIconContainer}
                colors={[secondary50, secondary70]}
            >
                <GuildIcon  
                    guildId={data.id}
                    iconId={data.icon}
                    
                />
            </LinearGradient>
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.type}>{data.owner ? 'Administrador' : 'Convidado'}</Text>
                </View>
            </View>

            <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={24}
            />
        </TouchableOpacity>
    )
}