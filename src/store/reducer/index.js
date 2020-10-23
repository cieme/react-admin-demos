
export function reducer(state = {}, action) {
  console.log('[action]', action)
  return state; // 如果传入一个无效的action类型，数据不变
}