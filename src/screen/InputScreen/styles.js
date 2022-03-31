import { StyleSheet } from 'react-native'

import { colors } from '../../constants/colors'
import { metrics } from '../../constants/metrics'

export const inputScreenStyle = StyleSheet.create({
    textInputArea: {
        borderRadius: metrics.size10,
        margin: metrics.size10,
        height: metrics.size60,
        backgroundColor: colors.grey,
        flexDirection: 'row',
        paddingHorizontal: metrics.size10
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    iconEmoji: {
        height: metrics.size35,
        width: metrics.size35,
        marginRight: metrics.size5,
    },
    iconButton: {
        alignSelf: 'center',
    },
    iconButtonPressed: {
        alignSelf: 'center',
        opacity: 0.4
    },
    textInput: {
        fontSize: metrics.size20,
        color: colors.white,
        marginRight: metrics.size40,
    },
    emojiTab: {
        height: metrics.size300,
        width: '95%',
        marginHorizontal: metrics.size10,
        borderRadius: metrics.size10,
        elevation: metrics.size7,
        padding: metrics.size12,
    },
    tab: {
        height: metrics.size5,
        marginVertical: metrics.size10,
    },
    tabItem: {
        fontSize: metrics.size12,
    },
    tabImage: {
        height: metrics.size12,
    },
    list: {
        marginTop: metrics.size50,
        height: metrics.size200,
    },
    emoji: {
        fontSize: metrics.size26,
        margin: metrics.size5,
    },
    searchInput: {
        fontSize: metrics.size16,
        color: colors.white,
        marginRight: metrics.size30,
    },
    iconSearch: {
        height: metrics.size25,
        width: metrics.size25,
        marginRight: metrics.size5,
        alignSelf: 'center'
    },
    searchInputArea: {
        borderRadius: metrics.size10,
        margin: metrics.size10,
        height: metrics.size45,
        marginTop: metrics.size55,
        width: '85%',
        backgroundColor: colors.grey,
        flexDirection: 'row',
        paddingHorizontal: metrics.size10,
        alignSelf: 'center',
        position: 'absolute',
    },
    iconCategory: {
        height: metrics.size30,
        width: metrics.size30,
        marginHorizontal: metrics.size4,
        alignSelf: 'center',
    },
    iconCategoryList: {
        marginLeft: metrics.size2,
        marginTop: metrics.size5,
        height: metrics.size55,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: metrics.size18,
    },
    sectionTitleContainer: {
        backgroundColor: colors.tabColor,
    }
})