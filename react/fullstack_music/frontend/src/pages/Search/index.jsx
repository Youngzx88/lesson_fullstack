import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
// useRef DOM相关
// useCallback 性能优化

const Search = (props) => {
    // 搜索内容 redux 解决共享状态问题
    // 1.搜索列表 <==> api ==> action ==> redux
    const [query, setQuery] = useState('')
}

const mapStateToProps = (state) => {
    return {
        // api 热搜
        hotlist: state.search.hotlist,
        enterLoading: state.search.enterLoading,
        // 搜索建议 卖广告
        suggestList: state.search.suggestList,
        // redux 最初愿景，跨模块数据共享
        songsCount: state.player.playList.length,
        songsList: state.search.songsList   
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // getHotKeyWordsDispatch() {
        //     dispatch(getHotKeyWords());
        // },
        // changeEnterLoadingDispatch(data) {
        //     dispatch(changeEnterLoading(data))
        // },
        // getSuggestListDispatch(data) {
        //     dispatch(getSuggestList(data));
        // },
        // getSongDetailDispatch(id) {
        //     dispatch(getSongDetail(id));
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)