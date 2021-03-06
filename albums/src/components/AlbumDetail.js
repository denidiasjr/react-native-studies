import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {

    const {
        title,
        artist,
        url,
        image,
        thumbnail_image
    } = album;

    const {
        thumbnailStyle,
        thumbnailContainerStyle,
        titleContainerStyle,
        titleStyle,
        imageStyle,
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
                </View>
                <View style={titleContainerStyle}>
                    <Text style={titleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{uri: image}} />
            </CardSection>
            <CardSection>
                <Button
                    onPress={() => Linking.openURL(url)} 
                >
                    Buy me baby!
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    thumbnailContainerStyle: {
        marginLeft: 10,
        marginRight: 10,
        alignItens: 'center',
        justifyContent: 'center',
    },
    thumbnailStyle: {
        width: 50,
        height: 50,
    },
    titleContainerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    titleStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
}

export default AlbumDetail;