import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer";
/**
 *
 * @param {*} state 之前仓库中的状态（数据）
 * @param {*} action 描述要做什么的对象
 */

// 创建仓库
const store = createStore(combineReducers({
  reducer
}), 10);

export default store