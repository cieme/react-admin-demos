export const INCREASE = Symbol("increase");
export const DECREASE = Symbol("decrease");
export const SET = Symbol("set");


export const ADDUSER = Symbol("addUser");
export const DELUSER = Symbol("delUser");
export const UPDUSER = Symbol("updUser");

// 添加用户
export function createAddUser(user) {
  return {
    type: ADDUSER,
    payload: user,
  };
}

// 删除用户
export function createDelUser(userId) {
  return {
    type: DELUSER,
    payload: userId,
  };
}

// 更新用户
export function createUpdUser(userId, newUserData) {
  return {
    type: UPDUSER,
    payload: {
      id: userId,
      data: newUserData,
    },
  };
}