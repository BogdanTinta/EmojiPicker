import React, { useState, useCallback, useRef } from 'react'
import { View, TextInput, Image, TouchableOpacity, FlatList, Text, SectionList, } from 'react-native'

import { inputScreenStyle } from './styles'
import { emojis, emojiCategories } from '../../constants/arrays'
import { colors } from '../../constants/colors'

const InputScreen = () => {
    const [buttonPressed, setButtonPressed] = useState(false)
    const [renderCondition, setRenderCondition] = useState('')
    const [message, setMessage] = useState('')
    const [pressed, setPressed] = useState(false)
    const sectionListRef = useRef(null)

    scrollTo = useCallback((index) => {
        sectionListRef.current.scrollToLocation({
            animated: true,
            itemIndex: 0,
            sectionIndex: index,

        })
    }, [])

    return (
        <View style={inputScreenStyle.container} >
            {
                buttonPressed === true ?
                    <View style={inputScreenStyle.emojiTab}>
                        <FlatList
                            style={inputScreenStyle.iconCategoryList}
                            horizontal
                            data={emojiCategories}
                            keyExtractor={(emojiCategories) => emojiCategories.index}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            scrollTo(item.index)

                                        }}

                                    >
                                        <Image
                                            source={item.image}
                                            style={
                                                inputScreenStyle.iconCategory}
                                        />
                                    </TouchableOpacity>
                                )
                            }}
                        />
                        <View style={inputScreenStyle.searchInputArea} >
                            <Image source={require('../../../assets/images/search.png')} style={inputScreenStyle.iconSearch} />
                            <TextInput
                                placeholder='Search'
                                placeholderTextColor={'white'}
                                style={inputScreenStyle.searchInput}
                                value={renderCondition}
                                onChangeText={setRenderCondition}
                            />
                        </View>
                        <SectionList
                            ref={sectionListRef}
                            sections={emojis}
                            onScrollToIndexFailed={() => setTimeout(200)}
                            stickySectionHeadersEnabled
                            showsVerticalScrollIndicator={false}
                            initialNumToRender={30}
                            style={inputScreenStyle.list}

                            renderSectionHeader={({ section: { title } }) => {
                                if (renderCondition === '') {
                                    return (
                                        <View style={inputScreenStyle.sectionTitleContainer}>
                                            <Text style={inputScreenStyle.sectionTitle}>{title}</Text>
                                        </View>
                                    )
                                }
                            }}

                            renderItem={({ item }) => {
                                return (
                                    <FlatList
                                        data={item.list}
                                        numColumns={8}
                                        renderItem={({ item }) => {
                                            if (renderCondition === '' || item.description.includes(renderCondition)) {
                                                return (
                                                    <TouchableOpacity onPress={() => setMessage(message + item.emoji)}>
                                                        <Text style={inputScreenStyle.emoji}>{item.emoji}</Text>
                                                    </TouchableOpacity>
                                                )
                                            }
                                        }}
                                    />
                                )
                            }}
                        />
                    </View> :
                    null
            }
            <View style={inputScreenStyle.textInputArea} >
                <TouchableOpacity
                    onPress={() => setButtonPressed(!buttonPressed)}
                    style={!buttonPressed ? inputScreenStyle.iconButtonPressed : inputScreenStyle.iconButton}
                >
                    <Image source={require('../../../assets/images/emoji.png')} style={inputScreenStyle.iconEmoji} />
                </TouchableOpacity>
                <TextInput
                    value={message}
                    placeholder='Message'
                    placeholderTextColor={colors.white}
                    style={inputScreenStyle.textInput}
                    onChangeText={setMessage}
                />
            </View>
        </View>
    )
}



InputScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default InputScreen