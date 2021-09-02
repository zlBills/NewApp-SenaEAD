/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

export default class MyList extends Component {
    state = {
        loading: false,
        data: [],
        current_page: 1,
        error: null,
        hasMore: true,
    }

    componentDidMount() { this.getListOfData(); }

    getListOfData = () => {
        if (this.state.loading) { return; }
        this.setState({ loading: true });
        let newData = [];
        newData.push({
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in congue risus, non viverra tellus. Nam faucibus ligula non metus ultrices mollis. Cras dolor purus, hendrerit eu eros quis, dignissim eleifend mi. In tincidunt mi in diam egestas congue ac ut purus. Nulla semper libero vitae blandit vehicula.",
            image: require('../images/img1.jpg'),
            id: this.state.data.length,
        });
        newData.push({
            title: "Curabitur vulputate",
            text: "Curabitur vulputate enim in lacus imperdiet, a convallis odio posuere. Nulla id ex et purus sodales rutrum non eu eros. Ut consequat est lacus.",
            image: require('../images/img2.jpg'),
            id: this.state.data.length + 1,
        });
        newData.push({
            title: "Proin hendrerit",
            text: "Proin hendrerit nisl id turpis bibendum, sit amet scelerisque augue elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a blandit sapien.",
            image: require('../images/img3.jpg'),
            id: this.state.data.length + 2,
        });
        this.setState({
            hasMore: true,
            data: [...this.state.data, ...newData],
            loading: false,
            current_page: this.state.current_page + 1,
        });

    }

    isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
        return layoutMeasurement.height + contentOffset.y
            >= contentSize.height - 50;
    }

    renderList = () => {
        return (this.state.data.map((u) => {
            return (
                <TouchableOpacity key={u.id}>
                    <View style={{ padding: 10 }} key={u.id}>
                        <FastImage style={{ width: 100, height: 100 }} source={u.image} resizeMode={FastImage.resizeMode.contain}/>
                        <Text style={{ fontSize: 15 }}>{u.title}</Text>
                        <Text>{u.text}</Text>
                    </View>
                </TouchableOpacity>);
        })
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        );
    }

}
