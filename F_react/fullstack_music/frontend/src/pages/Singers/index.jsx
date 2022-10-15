import React from 'react'

function Singer() {
  return (
    <div>
      Singers
    </div>
  )
}


// 映射Redux全局的state到组件的props上
const mapStateToProps = state => ({
  artist: state.getIn(["singerInfo", "artist"]),
  songs: state.getIn(["singerInfo", "songsOfArtist"]),
  loading: state.getIn(["singerInfo", "loading"]),
  songsCount: state.getIn(["player", "playList"]).size
});
// 映射dispatch到props上
const mapDispatchToProps = dispatch => {
  return {
    getSingerDataDispatch(id) {
      dispatch(changeEnterLoading(true));
      dispatch(getSingerInfo(id));
    }
  };
};

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Singer));